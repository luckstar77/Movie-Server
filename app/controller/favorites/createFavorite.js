'use strict';

module.exports = async ctx => {
  const favorites = await ctx.service.favorites.findList(ctx.user.id);

  ctx.body = favorites;
};
