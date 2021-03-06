'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/accounts/thirdpartyLogin.test.js', () => {
  before(async () => {
    const ctx = app.mockContext();
    await ctx.service.favorites.deleteAll();
    await ctx.service.thirdparties.deleteAll();
    await ctx.service.users.deleteAll();
  });

  it('should POST /thirdparty/login', () => {
    return app.httpRequest()
      .post('/thirdparty/login')
      .send({
        protocol: 'facebook',
        token: 'EAAPoFH6ZBdL0BALg6T0JQJ2wq0Y35tqyM7p1bAAHit9Rb4Xidk97Ord4224jRcjqsiWh3QKFDOKnGfZAr5JOQdqpoQz0SqwdfpMbNcxFQ00B4oPEX3aW7phWHQkqCKWMZBtLZCVxfKRFWmWBonWZAy2opR2OZAtzOO89g0tk2f8HAV1WTQT6IbgERKqyoOuqzySElSL3YFZCgZDZD',
        id: '10212621645712644',
      })
      .expect(200);
  });
});
