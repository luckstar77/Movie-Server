'use strict';

module.exports = async (ctx, next) => {
  ctx.validate({
    movie_id: {
      type: 'string',
    },
  });

  await next();
};
