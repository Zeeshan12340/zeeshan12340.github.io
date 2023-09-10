# Stage 1
FROM node:17-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm build

# Stage 2
FROM nginx:1.24.0-alpine
WORKDIR /usr/shar/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
