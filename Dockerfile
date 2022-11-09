FROM node:lts-alpine
RUN mkdir -p /usr/src/test_app
WORKDIR /usr/src/test_app/
COPY . /usr/src/test_app/
RUN npm install
CMD node /usr/src/test_app/app.js
