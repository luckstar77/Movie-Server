'use strict';

module.exports = async (ctx, next) => {
  ctx.validate({
    code: {
      type: 'string',
    },
  }, ctx.params);

  await next();
};
