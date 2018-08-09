'use strict';

module.exports = async (ctx, next) => {
  ctx.validate({
    favoriteId: {
      type: 'string',
    },
  }, ctx.params);

  await next();
};
