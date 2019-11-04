#!/bin/bash

# Builds a production-ready directory /build for serving
# Ensure that there is a '.env' file in the same directory as 'package.json'
# which should contain the environmental variable PUBLIC_URL.
# Example: PUBLIC_URL= https://www.evantay.com/tech/react-node-docker/
npm run build
docker build -t react-node-docker --no-cache .
