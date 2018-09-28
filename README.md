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

```test
$ docker-compose -f local.docker-compose.yml up -d
$ docker-compose -f local.docker-compose.yml up node
```

```dev
$ docker-compose -f local.docker-compose.yml up -d
$ docker-compose -f docker-compose.yml up node
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