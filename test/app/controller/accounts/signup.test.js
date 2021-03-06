'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/accounts/signup.test.js', () => {
  before(async () => {
    const ctx = app.mockContext();
    await ctx.service.favorites.deleteAll();
    await ctx.service.thirdparties.deleteAll();
    await ctx.service.users.deleteAll();
  });

  it('should POST /signup', () => {
    return app.httpRequest()
      .post('/signup')
      .send({
        email: 'luckstar77y@gmail.com',
        password: '123',
      })
      .expect(200);
  });
});
