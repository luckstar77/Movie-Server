'use strict';

module.exports = async ctx => {
  const user = await ctx.service.users.find(ctx.user.id);

  ctx.body = user;
};
