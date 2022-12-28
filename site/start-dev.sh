#! /bin/bash

docker build -t blog:latest -f Dockerfile.dev .

docker run -p 3000:3000 -v $(pwd):/app blog