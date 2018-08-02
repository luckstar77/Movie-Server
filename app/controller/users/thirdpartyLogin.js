'use strict';

var request = require('request');

module.exports = async ctx => {
  // TODO: multi protocol
  let token = ctx.request.body.token;
  let protocol = ctx.request.body.protocol;
  let id = ctx.request.body.id;
  const FBAuthTokenUrl = `https://graph.facebook.com/debug_token?access_token=${ctx.app.config.FB.id}|${ctx.app.config.FB.secret}&input_token=${token}`;

  let FBAuthData = await (() => new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === 'test')
      resolve({});

    request.get(FBAuthTokenUrl, (err, httpResponse, body, test) => {
      ctx.logger.info('FBAuthTokenUrl err: %j', err);
      ctx.logger.info('FBAuthTokenUrl body: %j', body);

      if (err)
        reject(err);

      let data = JSON.parse(body);

      if (data.data.error)
        reject(data.data.error);

      resolve(body);
    });
  }))();

  const FBGetUserUrl = `https://graph.facebook.com/${id}?access_token=${token}`;

  let FBUser = await (() => new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === 'test')
      resolve({
        name: 'test',
      });

    request.get(FBGetUserUrl, (err, httpResponse, body) => {
      ctx.logger.info('FBGetUserUrl err: %j', err);
      ctx.logger.info('FBGetUserUrl httpResponse status code: %j', httpResponse.statusCode);
      ctx.logger.info('FBGetUserUrl body: %j', body);

      if (err)
        reject(err);
      
      if (httpResponse.statusCode != 200)
        reject (JSON.parse(body));
      
      resolve(body);
    });
  }))();

  let thirdparty = await ctx.service.thirdparties.find(id, protocol);
  let account = `${protocol}_${id}`;
  let userId = thirdparty && thirdparty.users_id;

  if (!thirdparty) {
    userId = await ctx.service.users.createByThirdparty(account, FBUser.name);
    let thirdpartyId = await ctx.service.thirdparties.create(id, protocol, token, userId);
  }

  let user = await ctx.service.users.find(userId);
  const userToken = ctx.app.jwt.sign(JSON.stringify(user), ctx.app.config.jwt.secret);

  ctx.body = { token: userToken };
};
