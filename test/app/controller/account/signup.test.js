'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/account/signup.test.js', () => {
  it('should POST /signup', () => {
    return app.httpRequest()
      .post('/signup')
      .send({
        email: '123@a.ca',
        password: '123123',
      })
      .expect(200);
  });
});
