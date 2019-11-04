#!/bin/bash

# Remove container with the same name if exist
docker stop rnd || true && docker rm rnd || true

# "-p <public port on host>:<private port of Docker>"
# "-d" represents detached mode, run in background
# "--rm" remove container on exit
docker run --name rnd --rm -p 3000:3000 -d react-node-docker
