'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528030994982_7496';

  // add your config here
  config.middleware = [];

  config.url = {
    api: '',
    version: '',
  };

  config.security = {
    csrf: false,
    domainWhiteList: [ 'movies.allenkou.info', 'localhost' ],
  };

  exports.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.FB = {
    id: process.env.FBId,
    secret: process.env.FBSecret,
  };

  config.jwt = {
    secret: 'movie',
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: process.env.mysqlHost,
      // 端口号
      port: '3306',
      // 用户名
      user: process.env.mysqlUser,
      // 密码
      password: process.env.mysqlPassword,
      // 数据库名
      database: process.env.mysqlDatabase,
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.logger = {
    level: 'DEBUG',
    disableConsoleAfterReady: false,
  };

  config.mailgun = {
    client: {
      // api key
      apiKey: process.env.mailgunApiKey,
      // domain
      domain: process.env.mailgunDomain,
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  config.io = {
    namespace: {
      '/': {
        connectionMiddleware: [ 'auth' ],
        packetMiddleware: [ 'filter' ],
      },
      '/chat': {
        connectionMiddleware: [ 'auth' ],
        packetMiddleware: [],
      },
    },
    // redis: {
    //   host: process.env.redisHost,
    //   port: 6379,
    // },
  };

  return config;
};
