FROM node:16-buster
RUN apt update
RUN apt install -y git
RUN mkdir /web
RUN npm install -g @angular/cli
WORKDIR /web/
COPY ./ /web/
