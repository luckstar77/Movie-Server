FROM mysql:5.7

ENV MYSQL_ALLOW_EMPTY_PASSWORD yes

COPY sql/docker_database.sql /docker-entrypoint-initdb.d

EXPOSE 3306