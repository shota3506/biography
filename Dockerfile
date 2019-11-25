FROM node:12.6.0-alpine

RUN mkdir /app

RUN apk update

WORKDIR /app

CMD ["/bin/ash"]