#!/bin/bash

# Set environment variables for testing
export NEXT_PUBLIC_USE_MOCK_DATA=true

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Run the development server
echo "Starting development server with mock data..."
npm run dev 