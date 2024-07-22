
FROM node:22.1.0-alpine3.19

RUN npm install -g nodemon


WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

CMD [ "npm","start" ]