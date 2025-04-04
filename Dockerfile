# Base image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy all code
COPY . .

# Make the startup script executable
RUN chmod +x /app/startup.sh

# Expose the port FastAPI runs on
EXPOSE 8000

# Run the startup script
CMD ["/app/startup.sh"]