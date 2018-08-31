FROM node:8

WORKDIR /app

COPY . /app/

EXPOSE 7001

RUN yarn install && yarn cache clean

CMD [ "test" ]

ENTRYPOINT [ "yarn" ]  