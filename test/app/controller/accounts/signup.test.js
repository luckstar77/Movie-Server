'use strict';

const { app } = require('egg-mock/bootstrap');

describe.only('test/app/controller/accounts/signup.test.js', () => {
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
