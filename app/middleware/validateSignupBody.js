'use strict';

const crypto = require('crypto');

module.exports = async (ctx, next) => {
  ctx.validate({
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  });

  const password = crypto.createHmac('sha256', ctx.app.config.keys)
    .update(ctx.request.body.password)
    .digest('hex');

  ctx.request.body.password = password;

  await next();
};
