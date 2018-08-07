'use strict';

module.exports = async (ctx, next) => {
  ctx.validate({
    authorization: {
      type: 'string',
    },
  }, ctx.request.header);

  const user = ctx.app.jwt.verify(ctx.get('authorization'), ctx.app.config.jwt.secret);

  ctx.request.body = user;

  await next();
};
