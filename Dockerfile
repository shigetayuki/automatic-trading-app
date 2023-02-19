FROM node:lts-alpine
RUN npm install -g @angular/cli
RUN mkdir /web
WORKDIR /web/
COPY ./ /web/
