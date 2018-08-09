'use strict';

module.exports = async ctx => {
  const id = ctx.params.favoriteId;
  const result = await ctx.service.favorites.del(id);
  ctx.logger.info('favorites delete result: %j', result);

  ctx.status = 200;
};
