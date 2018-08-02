'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528030994982_7496';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: false,
  };

  config.FB = {
    id: process.env.FBId,
    secret: process.env.FBSecret,
  }

  config.jwt = {
    secret: 'movie',
  }

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
  }

  config.logger = {
    level: 'DEBUG',
  };

  return config;
};
