'use strict';

const request = require('request');

module.exports = async ctx => {
  // TODO: multi protocol
  const token = ctx.request.body.token;
  const protocol = ctx.request.body.protocol;
  const id = ctx.request.body.id;
  const FBAuthTokenUrl = `https://graph.facebook.com/debug_token?access_token=${ctx.app.config.FB.id}|${ctx.app.config.FB.secret}&input_token=${token}`;

  const FBAuthData = await (() => new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === 'test') { resolve({}); }

    request.get(FBAuthTokenUrl, (err, httpResponse, body, test) => {
      ctx.logger.info('FBAuthTokenUrl err: %j', err);
      ctx.logger.info('FBAuthTokenUrl body: %j', body);

      if (err) { reject(err); }

      const data = JSON.parse(body);

      if (data.data.error) { reject(data.data.error); }

      resolve(body);
    });
  }))();

  const FBGetUserUrl = `https://graph.facebook.com/${id}?fields=id,name,picture&access_token=${token}`;

  const FBUser = await (() => new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === 'test') {
      resolve({
        name: 'test',
        picture: {
          data: {
            url: 'test',
          },
        },
      });
    }

    request.get(FBGetUserUrl, (err, httpResponse, body) => {
      ctx.logger.info('FBGetUserUrl err: %j', err);
      ctx.logger.info('FBGetUserUrl httpResponse status code: %j', httpResponse.statusCode);
      ctx.logger.info('FBGetUserUrl body: %j', body);

      if (err) { reject(err); }

      if (httpResponse.statusCode != 200) { reject(JSON.parse(body)); }

      resolve(body);
    });
  }))();

  ctx.logger.info('thirdparty id, protocol: %j, %j', id, protocol);
  const thirdparty = await ctx.service.thirdparties.find(id, protocol);
  ctx.logger.info('thirdparty: %j', thirdparty);
  const account = `${protocol}_${id}`;
  let userId = thirdparty && thirdparty.users_id;
  ctx.logger.info('userId: %j', userId);

  if (!thirdparty) {
    ctx.logger.info('account, name, url: %j, %j, %j', account, FBUser.name, FBUser.picture.data.url);
    userId = await ctx.service.users.createByThirdparty(account, FBUser.name, FBUser.picture.data.url);
    ctx.logger.info('id, protocol, token, userId: %j, %j, %j', id, protocol, token, userId);
    const thirdpartyId = await ctx.service.thirdparties.create(id, protocol, token, userId);
    ctx.logger.info('thirdpartyId: %j', thirdpartyId);
  }

  const user = await ctx.service.users.find(userId);;
  ctx.logger.info('user, secret: %j, %j', user, ctx.app.config.jwt.secret);
  const userToken = ctx.app.jwt.sign(JSON.stringify(user), ctx.app.config.jwt.secret);
  ctx.logger.info('userToken: %j', userToken);

  ctx.body = { token: userToken };
};
