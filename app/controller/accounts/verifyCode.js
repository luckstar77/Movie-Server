'use strict';

module.exports = async ctx => {
  const userId = ctx.app.jwt.verify(ctx.params.code, ctx.app.config.jwt.secret).userId;

  const user = await ctx.service.users.find(userId);

  if (!user) { throw 'ERR: USER NOT FOUND'; }

  if (user.status !== 'PENDING') { throw 'ERR: USER HAS ACTIVE'; }

  await ctx.service.users.setStatusById(userId);

  ctx.status = 200;
  ctx.body = {
    ...user,
    status: 'ACTIVE',
  };
};
