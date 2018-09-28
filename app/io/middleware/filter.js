'use strict';

const room = 'default_room';

module.exports = () => {
  return async (ctx, next) => {
    ctx.socket.join(room);
    ctx.app.io.of('/').to(room).emit('online', { msg: 'welcome', id: ctx.socket.id });
    await next();
    console.log('disconnection!');
  };
};
