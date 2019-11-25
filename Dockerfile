FROM node:12.6.0-alpine

RUN mkdir /app

RUN apk update && \
    npm install -g npm && \
    npm install -g @vue/cli

WORKDIR /app

CMD ["/bin/ash"]