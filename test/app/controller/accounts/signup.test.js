'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/accounts/signup.test.js', () => {
  it('should POST /signup', () => {
    return app.httpRequest()
      .post('/signup')
      .send({
        email: '123',
        password: '123',
      })
      .expect(200);
  });
});
