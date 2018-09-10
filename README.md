# Movie-Server



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

### docker

```bash
$ docker-compose up -d
```

### dev

```bash
$ docker build -f docker/mysql/Dockerfile -t movie-mysql .
$ docker run -p 3306:3306 --rm -d movie-mysql
$ docker build -f docker/node/local.Dockerfile -t movie-node .
$ docker run -p 7001:7001 -v /Users/allenlai/Projects/Movie/code/Movie-Server:/app -it --rm movie-node /bin/bash
```

### FB

```bash
$ export FBId=$FBId
$ export FBSecret=$FBSecret
```

### mailgun

```bash
$ export mailgunApiKey=$mailgunApiKey
$ export mailgunDomain=$mailgunDomain
```

### mysql

```bash
$ export mysqlHost=$mysqlHost
$ export mysqlUser=$mysqlUser
$ export mysqlPassword=$mysqlPassword
$ export mysqlDatabase=$mysqlDatabase
```