'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/favorites/getFavorites.test.js', () => {
  let userToken = '';
  let favoriteId;
  let ctx;

  before(async () => {
    ctx = app.mockContext();
    const userId = await ctx.service.users.createByThirdparty('123123', '123123', '123123');
    favoriteId = await ctx.service.favorites.create(userId, '123123');
    ctx.logger.info('favoriteId: %j', favoriteId);
    const user = await ctx.service.users.find(userId);
    userToken = ctx.app.jwt.sign(JSON.stringify(user), ctx.app.config.jwt.secret);
  });

  it('should GET /favorites', () => {
    return app.httpRequest()
      .get('/favorites')
      .set('authorization', userToken)
      .expect(200);
  });
});
