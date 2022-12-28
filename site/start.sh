#! /bin/bash

docker build -t blog:latest .

docker run -p 8080:80