# docker image of facelog mysql
# version 1.0.0
FROM mysql:5.6

ENV MYSQL_ALLOW_EMPTY_PASSWORD yes

COPY sql/create_table.sql /docker-entrypoint-initdb.d

EXPOSE 3306