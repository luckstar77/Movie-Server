'use strict';

module.exports = async ctx => {
  const email = ctx.request.body.email;
  const password = ctx.request.body.password;
  const user = await ctx.service.users.findByEmail(email);

  if (user) {
    ctx.status = 400;
    return;
  }

  const userId = await ctx.service.users.createByEmail(email, password);

  ctx.body = await ctx.service.users.find(userId);

  ctx.service.users.sendVerificationCode(email, userId);
};
