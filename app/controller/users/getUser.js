'use strict';

module.exports = async ctx => {
  const user = await ctx.service.users.find(ctx.request.body.id);

  ctx.body = user;
};
