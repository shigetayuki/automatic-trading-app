FROM node:16-buster
RUN apt update
RUN apt install -y git
RUN npm install -g @angular/cli
RUN mkdir /web
WORKDIR /web/
COPY ./ /web/
