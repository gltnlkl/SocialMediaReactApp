# stage1 as builder
FROM node:10
COPY ./build /usr/bilgesocial/
RUN apt-get update -y
RUN npm install -g serve
WORKDIR /usr/bilgesocial/
EXPOSE 3000
