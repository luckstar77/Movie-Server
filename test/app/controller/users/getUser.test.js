'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/users/getUser.test.js', () => {
  let userToken = '';
  let ctx;

  before(async () => {
    ctx = app.mockContext();
    const userId = await ctx.service.users.createByThirdparty('123123', '123123', '123123');
    const user = await ctx.service.users.find(userId);
    userToken = ctx.app.jwt.sign(JSON.stringify(user), ctx.app.config.jwt.secret);
  });

  it('should GET /user', () => {
    return app.httpRequest()
      .get('/user')
      .set('authorization', userToken)
      .expect(200);
  });
});
