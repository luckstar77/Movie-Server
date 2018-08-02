'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/accounts/thirdpartyLogin.test.js', () => {
  it('should POST /thirdparty/login', () => {
    return app.httpRequest()
      .post('/thirdparty/login')
      .send({
        protocol: 'facebook',
        token: '123123',
        id: '123123',
      })
      .expect(200);
  });
});
