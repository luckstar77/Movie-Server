# docker image of facelog mysql
# version 1.0.0
FROM node:8.9.0

WORKDIR /app

COPY . /app/

EXPOSE 7001

RUN yarn install && yarn cache clean

CMD [ "yarn", "start" ]