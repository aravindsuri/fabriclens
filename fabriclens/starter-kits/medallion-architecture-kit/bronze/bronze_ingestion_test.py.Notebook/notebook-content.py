# Fabric notebook source

# METADATA ********************

# META {
# META   "kernel_info": {
# META     "name": "synapse_pyspark"
# META   },
# META   "dependencies": {}
# META }

# CELL ********************

# Welcome to your new notebook
# Type here in the cell editor to add code!
# Microsoft Fabric - Bronze Layer Ingestion Template
# Description: Parameterized template for ingesting data into the Bronze layer in Microsoft Fabric

# PARAMETERS
# Use Fabric notebook parameters or parameter cells
# param source_type = "CSV" # Source Type (CSV, JSON, API, etc.)
# param source_path = "" # Source Path/URL
# param target_table = "" # Target Bronze Table Name
# param watermark_column = "" # Watermark Column (for incremental loads)
# param is_incremental = "false" # Incremental Load
# param auth_type = "none" # Authentication Type (none, basic, oauth, key)

import pyspark.sql.functions as F
from pyspark.sql.types import *
from datetime import datetime
import json
import uuid
import requests
import time
import os

# Configuration - Parse parameters
source_type = spark.conf.get("source_type", "CSV")
source_path = spark.conf.get("source_path", "")
target_table = spark.conf.get("target_table", "")
watermark_column = spark.conf.get("watermark_column", "")
is_incremental = spark.conf.get("is_incremental", "false").lower() == "true"
auth_type = spark.conf.get("auth_type", "none")

# Define lakehouse paths using Microsoft Fabric conventions
lakehouse_name = spark.conf.get("lakehouse_name", "MainLakehouse")
bronze_location = f"Tables/bronze/{target_table}"
metadata_location = f"Files/metadata/{target_table}"
checkpoint_location = f"Files/checkpoints/{target_table}"

# Generate batch tracking identifiers
batch_id = str(uuid.uuid4())
batch_timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# LOGGING FRAMEWORK
class Logger:
    def __init__(self, notebook_name, batch_id):
        self.notebook_name = notebook_name
        self.batch_id = batch_id
        self.log_entries = []
        self.log_table = "bronze_logs"
        
    def log(self, level, message, context=None):
        """Log an event with specified severity level"""
        entry = {
            "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "notebook": self.notebook_name,
            "batch_id": self.batch_id,
            "level": level,
            "message": message
        }
        
        if context:
            entry["context"] = json.dumps(context)
            
        self.log_entries.append(entry)
        
        # Print to notebook output
        print(f"[{entry['timestamp']}] [{level}] {message}")
        
        # For critical errors, exit the notebook
        if level == "CRITICAL":
            raise Exception(f"Critical error: {message}")
            
    def info(self, message, context=None):
        self.log("INFO", message, context)
        
    def warning(self, message, context=None):
        self.log("WARNING", message, context)
        
    def error(self, message, context=None):
        self.log("ERROR", message, context)
        
    def critical(self, message, context=None):
        self.log("CRITICAL", message, context)
        
    def save_logs(self):
        """Save all log entries to a Delta table"""
        if self.log_entries:
            try:
                log_df = spark.createDataFrame(self.log_entries)
                log_df.write.format("delta").mode("append").saveAsTable(self.log_table)
                print(f"Logs saved to {self.log_table}")
            except Exception as e:
                print(f"Failed to save logs: {str(e)}")

# Initialize logger
logger = Logger("Bronze_Ingest", batch_id)
logger.info(f"Starting ingestion for {target_table}", {
    "source_type": source_type,
    "target_table": target_table,
    "is_incremental": is_incremental
})

# ERROR HANDLING FUNCTION
def execute_with_retry(function, max_retries=3, **kwargs):
    """Execute a function with retry logic"""
    retries = 0
    last_exception = None
    
    while retries < max_retries:
        try:
            result = function(**kwargs)
            logger.info(f"Operation successful on attempt {retries + 1}")
            return result
        except Exception as e:
            last_exception = e
            retries += 1
            logger.warning(f"Attempt {retries} failed: {str(e)}")
            
            # Wait longer between each retry
            time.sleep(2 ** retries)
    
    # If we get here, all retries failed
    logger.error(f"Operation failed after {max_retries} attempts: {str(last_exception)}")
    raise last_exception

# METADATA CAPTURE FUNCTIONS
def capture_metadata(df, source_info, process_name):
    """Capture metadata about the dataframe and process"""
    try:
        # Calculate basic stats
        row_count = df.count()
        columns = len(df.columns)
        
        # Get schema as string
        schema_json = df.schema.json()
        
        # Sample data (limited to prevent memory issues)
        sample_data = [row.asDict() for row in df.limit(5).collect()]
        
        # Create metadata record
        metadata = {
            "batch_id": batch_id,
            "process_timestamp": batch_timestamp,
            "source": source_info,
            "process_name": process_name,
            "target_table": target_table,
            "row_count": row_count,
            "column_count": columns,
            "column_names": df.columns,
            "schema": schema_json,
            "sample_data": json.dumps(sample_data)
        }
        
        # Save metadata as JSON file in the lakehouse
        metadata_file = f"{metadata_location}/metadata_{batch_id}.json"
        metadata_df = spark.createDataFrame([metadata])
        metadata_df.write.mode("overwrite").json(metadata_file)
        
        # Also append to the metadata table
        metadata_df.write.format("delta").mode("append").saveAsTable("bronze_metadata")
        
        logger.info(f"Metadata captured: {row_count} rows, {columns} columns")
        return metadata
    except Exception as e:
        logger.error(f"Failed to capture metadata: {str(e)}")
        raise

# SCHEMA INFERENCE AND VALIDATION
def infer_schema(df, sample_size=1000):
    """Infer schema from the dataframe and return structured schema info"""
    try:
        # Sample the dataframe for schema inference
        sample_df = df.limit(sample_size)
        
        # Get schema information
        schema_info = []
        for field in df.schema.fields:
            # Calculate basic statistics for each column
            if isinstance(field.dataType, NumericType):
                stats = sample_df.agg(
                    F.min(field.name).alias("min"),
                    F.max(field.name).alias("max"),
                    F.avg(field.name).alias("mean"),
                    F.stddev(field.name).alias("stddev"),
                    F.count(field.name).alias("count"),
                    F.count(F.when(F.col(field.name).isNull(), 1)).alias("null_count")
                ).collect()[0].asDict()
            else:
                stats = sample_df.agg(
                    F.countDistinct(field.name).alias("distinct_count"),
                    F.count(field.name).alias("count"),
                    F.count(F.when(F.col(field.name).isNull(), 1)).alias("null_count")
                ).collect()[0].asDict()
            
            column_info = {
                "name": field.name,
                "type": str(field.dataType),
                "nullable": field.nullable,
                "metadata": field.metadata,
                "stats": stats
            }
            schema_info.append(column_info)
        
        logger.info(f"Schema inferred with {len(schema_info)} columns")
        return schema_info
    except Exception as e:
        logger.error(f"Schema inference failed: {str(e)}")
        raise

def validate_schema(df, expected_schema=None):
    """Validate dataframe schema against expected schema"""
    if expected_schema is None:
        logger.info("No expected schema provided, skipping validation")
        return True
    
    try:
        # Convert expected schema string to StructType if it's a string
        if isinstance(expected_schema, str):
            expected_schema = StructType.fromJson(json.loads(expected_schema))
        
        # Compare schemas
        actual_fields = set([f.name.lower() for f in df.schema.fields])
        expected_fields = set([f.name.lower() for f in expected_schema.fields])
        
        # Check for missing or extra fields
        missing_fields = expected_fields - actual_fields
        extra_fields = actual_fields - expected_fields
        
        if missing_fields:
            logger.warning(f"Missing expected fields: {missing_fields}")
        
        if extra_fields:
            logger.info(f"Extra fields found: {extra_fields}")
        
        # Type validation for common fields
        type_mismatches = []
        for expected_field in expected_schema.fields:
            if expected_field.name.lower() in actual_fields:
                actual_field = next(f for f in df.schema.fields if f.name.lower() == expected_field.name.lower())
                if str(actual_field.dataType) != str(expected_field.dataType):
                    type_mismatches.append({
                        "field": expected_field.name,
                        "expected_type": str(expected_field.dataType),
                        "actual_type": str(actual_field.dataType)
                    })
        
        if type_mismatches:
            logger.warning(f"Type mismatches: {type_mismatches}")
        
        # Schema is valid if no missing fields and no type mismatches
        is_valid = len(missing_fields) == 0 and len(type_mismatches) == 0
        return is_valid
    except Exception as e:
        logger.error(f"Schema validation failed: {str(e)}")
        return False

# READ DATA BASED ON SOURCE TYPE
def read_data():
    """Read data from the specified source"""
    logger.info(f"Reading data from {source_type} source: {source_path}")
    
    try:
        if source_type.upper() == "CSV":
            df = spark.read.format("csv") \
                .option("header", "true") \
                .option("inferSchema", "true") \
                .load(source_path)
                
        elif source_type.upper() == "JSON":
            df = spark.read.format("json") \
                .load(source_path)
                
        elif source_type.upper() == "PARQUET":
            df = spark.read.format("parquet") \
                .load(source_path)
                
        elif source_type.upper() == "DELTA":
            df = spark.read.format("delta") \
                .load(source_path)
                
        elif source_type.upper() == "API":
            # This is a placeholder - API ingestion would require custom code
            logger.error("API ingestion requires custom implementation")
            raise NotImplementedError("API ingestion not implemented in template")
            
        else:
            logger.error(f"Unsupported source type: {source_type}")
            raise ValueError(f"Unsupported source type: {source_type}")
        
        # Add metadata columns
        df = df.withColumn("ingest_timestamp", F.lit(batch_timestamp)) \
               .withColumn("batch_id", F.lit(batch_id)) \
               .withColumn("source_file", F.input_file_name())
        
        return df
    except Exception as e:
        logger.error(f"Failed to read data: {str(e)}")
        raise

# INCREMENTAL LOAD LOGIC
def get_last_watermark():
    """Get the last watermark value for incremental loads"""
    try:
        # Check if table exists
        tables = spark.sql(f"SHOW TABLES IN {lakehouse_name} LIKE '{target_table}'").collect()
        if len(tables) > 0:
            # Get max watermark value
            watermark_df = spark.sql(f"SELECT MAX({watermark_column}) as max_watermark FROM {lakehouse_name}.{target_table}")
            max_watermark = watermark_df.collect()[0]["max_watermark"]
            logger.info(f"Last watermark value: {max_watermark}")
            return max_watermark
        else:
            logger.info("Target table doesn't exist yet, performing full load")
            return None
    except Exception as e:
        logger.warning(f"Failed to get last watermark: {str(e)}, falling back to full load")
        return None

# MAIN EXECUTION FLOW
try:
    # Step 1: Read data from source
    raw_df = execute_with_retry(read_data)
    logger.info(f"Raw data read: {raw_df.count()} rows, {len(raw_df.columns)} columns")
    
    # Step 2: Capture raw data metadata
    raw_metadata = capture_metadata(raw_df, source_path, "raw_ingestion")
    
    # Step 3: Infer and validate schema
    schema_info = infer_schema(raw_df)
    
    # Step 4: Apply incremental logic if specified
    if is_incremental and watermark_column:
        last_watermark = get_last_watermark()
        if last_watermark is not None:
            raw_df = raw_df.filter(F.col(watermark_column) > last_watermark)
            logger.info(f"Applied watermark filter: {raw_df.count()} rows remaining")
    
    # Step 5: Write to bronze table
    raw_df.write \
        .format("delta") \
        .mode("append") \
        .option("mergeSchema", "true") \
        .saveAsTable(f"{lakehouse_name}.{target_table}")
    
    logger.info(f"Data successfully written to bronze table: {target_table}")
    
    # Step 6: Save the logs
    logger.save_logs()
    
    print(f"✅ Bronze ingestion completed successfully for {target_table}")
    
except Exception as e:
    logger.error(f"Bronze ingestion failed: {str(e)}")
    logger.save_logs()
    raise e

# METADATA ********************

# META {
# META   "language": "python",
# META   "language_group": "synapse_pyspark"
# META }
