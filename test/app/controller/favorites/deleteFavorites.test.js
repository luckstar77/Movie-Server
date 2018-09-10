'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/favorites/deleteFavorites.test.js', () => {
  let userToken = '';
  let favoriteId;
  let ctx;

  before(async () => {
    const ctx = app.mockContext();
    await ctx.service.favorites.deleteAll();
    await ctx.service.thirdparties.deleteAll();
    await ctx.service.users.deleteAll();
  });

  before(async () => {
    ctx = app.mockContext();
    const userId = await ctx.service.users.createByThirdparty('123123', '123123', '123123');
    favoriteId = await ctx.service.favorites.create(userId, '123123');
    ctx.logger.info('favoriteId: %j', favoriteId);
    const user = await ctx.service.users.find(userId);
    userToken = ctx.app.jwt.sign(JSON.stringify(user), ctx.app.config.jwt.secret);
  });

  it('should DELETE /favorite/:favoriteId', () => {
    return app.httpRequest()
      .del(`/favorite/${favoriteId}`)
      .set('authorization', userToken)
      .expect(200);
  });
});
