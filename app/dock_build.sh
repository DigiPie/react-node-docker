#!/bin/bash

npm run build
docker build -t react-node-docker --no-cache .
