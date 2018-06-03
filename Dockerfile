# Dockerfile

# 從 [Docker Hub](https://hub.docker.com/) 安裝 Node.js image。
FROM node:8.11.2

# 設定 container 的預設目錄位置
WORKDIR /Movie-Server

# 將專案根目錄的檔案加入至 container
# 安裝 npm package
ADD . /Movie-Server
RUN npm install

# 開放 container 的 port
EXPOSE 7001
CMD npm run docker
