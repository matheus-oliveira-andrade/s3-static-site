FROM node:16-alpine AS builder 

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

RUN npm run export


FROM nginx AS final

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 8080