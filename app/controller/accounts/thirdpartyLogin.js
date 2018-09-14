'use strict';

const request = require('request');

module.exports = async ctx => {
  // TODO: multi protocol
  const token = ctx.request.body.token;
  const protocol = ctx.request.body.protocol;
  const id = ctx.request.body.id;
  const FBAuthTokenUrl = `https://graph.facebook.com/debug_token?access_token=${ctx.app.config.FB.id}|${ctx.app.config.FB.secret}&input_token=${token}`;

  const FBAuthData = await (() => new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === 'test') { resolve({}); return; }

    request.get(FBAuthTokenUrl, (err, httpResponse, body) => {
      if (err) { reject(err); }

      const data = JSON.parse(body);

      if (data.data.error) { reject(data.data.error); }

      resolve(body);
    });
  }))();
  ctx.logger.info('FBAuthData: %j', FBAuthData);

  ctx.logger.info('id, token: %j, %j', id, token);
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

      return;
    }

    request.get(FBGetUserUrl, (err, httpResponse, body) => {
      if (err) { reject(err); }

      if (httpResponse.statusCode !== 200) { reject(JSON.parse(body)); }

      resolve(JSON.parse(body));
    });
  }))();
  ctx.logger.info('FBUser: %j', FBUser);

  const thirdparty = await ctx.service.thirdparties.find(id, protocol);
  const account = `${protocol}_${id}`;
  let userId = thirdparty && thirdparty.users_id;

  if (!thirdparty) {
    userId = await ctx.service.users.createByThirdparty(account, FBUser.name, FBUser.picture.data.url);
    const thirdpartyId = await ctx.service.thirdparties.create(id, protocol, token, userId);
    ctx.logger.info('thirdpartyId: %j', thirdpartyId);
  }

  const user = await ctx.service.users.find(userId);
  const userToken = ctx.app.jwt.sign(JSON.stringify(user), ctx.app.config.jwt.secret);

  ctx.body = { token: userToken };
};
