# **AI CONSORTIUM WEBSITE**

## Overview
This repository contains the frontend code for the AI Consortium website.

## Docker Instructions

### Building the Image
```bash
docker build -t ai-consortium .
```

### Running the Container
```bash
docker run -d --name ai-consortium -p 4173:4173 ai-consortium
```

### Updating the Container
To update the container with the latest code from GitHub:
```bash
./update-container.sh
```
> **Note**: Run this command in WSL or Git Bash. PowerShell does not support shell scripts.

## Requirements
- Docker
- WSL or Git Bash (for updates)