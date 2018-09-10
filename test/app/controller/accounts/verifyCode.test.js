'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/accounts/signup.test.js', () => {
  const email = 'luckstar77y@gmail.com';
  const password = '123';
  let code;

  before(async () => {
    const ctx = app.mockContext();
    await ctx.service.favorites.deleteAll();
    await ctx.service.thirdparties.deleteAll();
    await ctx.service.users.deleteAll();
  });

  before(async () => {
    const ctx = app.mockContext();
    const userId = await ctx.service.users.createByEmail(email, password);
    code = ctx.app.jwt.sign({ userId }, ctx.app.config.jwt.secret, { expiresIn: '10m' });
  });

  it('should POST /signup', () => {
    return app.httpRequest()
      .get(`/verify/${code}`)
      .expect(200);
  });
});
