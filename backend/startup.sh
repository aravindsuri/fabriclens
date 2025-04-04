#!/bin/bash

# Navigate to the right directory
cd /home/site/wwwroot

# Print current directory for debugging
echo "Current directory: $(pwd)"
echo "Listing directory contents:"
ls -la

# Make sure we have the latest pip
python -m pip install --upgrade pip

# Install dependencies - try both locations
if [ -f "requirements.txt" ]; then
    echo "Found requirements.txt in root directory"
    pip install -r requirements.txt
elif [ -f "backend/requirements.txt" ]; then
    echo "Found requirements.txt in backend directory"
    pip install -r backend/requirements.txt
else
    echo "No requirements.txt found!"
    exit 1
fi

# Verify uvicorn and gunicorn are installed
echo "Checking for uvicorn and gunicorn..."
pip list | grep uvicorn
pip list | grep gunicorn

# Start the application
echo "Starting application with gunicorn and uvicorn worker"
cd /home/site/wwwroot
gunicorn -w 4 -k uvicorn.workers.UvicornWorker backend.main:app --bind=0.0.0.0:8000