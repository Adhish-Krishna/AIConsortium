#!/bin/bash

echo "Pulling latest code from GitHub..."
git pull origin main

echo "Stopping existing container..."
docker stop ai-consortium || true

echo "Removing existing container..."
docker rm ai-consortium || true

echo "Building new Docker image..."
docker build -t ai-consortium .

echo "Running new container..."
docker run -d --name ai-consortium -p 4173:4173 ai-consortium

echo "Showing real-time logs..."
docker logs -f ai-consortium
