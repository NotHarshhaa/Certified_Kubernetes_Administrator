#!/bin/bash

# Build test script for GitHub Pages deployment
echo "🚀 Testing build for GitHub Pages..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building Next.js app..."
npm run build

# Export static files
echo "📤 Exporting static files..."
npm run export

# Check if out directory exists
if [ -d "out" ]; then
    echo "✅ Build successful! Static files are in the 'out' directory"
    echo "📁 Build output:"
    ls -la out/
else
    echo "❌ Build failed! No 'out' directory found"
    exit 1
fi

echo "🎉 Build test completed successfully!"
