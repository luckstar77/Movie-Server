'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/favorites/createFavorite.test.js', () => {
  let userToken = '';
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
    const user = await ctx.service.users.find(userId);
    userToken = ctx.app.jwt.sign(JSON.stringify(user), ctx.app.config.jwt.secret);
  });

  it('should POST /favorite', () => {
    return app.httpRequest()
      .post('/favorite')
      .set('authorization', userToken)
      .send({
        movie_id: '123123',
      })
      .expect(200);
  });
});
