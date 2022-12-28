#! /bin/bash

docker build -t blog:dev -f Dockerfile.dev .

docker run -p 3000:3000 -v $(pwd):/app blog:dev