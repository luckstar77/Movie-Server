'use strict';

const { app } = require('egg-mock/bootstrap');

// TODO: ws test
describe.skip('test/app/io/controller/chat.test.js', () => {
  before(async () => {
    console.log(app.io);
  });
  it('should have an accessible socket id equal to the server-side socket id (default namespace)', function(done) {
    const socket = require('socket.io-client')('ws://127.0.0.1:7001/', {
      transports: [ 'websocket' ],
    });
    socket.connect();
    socket.on('connect', function() {
      console.log('@@@@');
      socket.emit('chat', 'test');
      socket.disconnect();
      done();
    });
  });
});
