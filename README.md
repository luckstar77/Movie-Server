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

### nodock

```bash
$ docker-compose -f nodock/docker-compose.yml -f nodock/docker-compose.dev.yml up -d node mysql
$ docker-compose -f nodock/docker-compose.yml -f nodock/docker-compose.test.yml up node mysql
```