'use strict';

module.exports = async ctx => {
  const email = ctx.request.body.email;
  const password = ctx.request.body.password;
  const user = await ctx.service.users.findByEmail(email);

  ctx.logger.info('user: %j', user);
  if (user) {
    ctx.status = 400;
    return;
  }

  ctx.logger.info('email, password: %j, %j', email, password);
  const userId = await ctx.service.users.createByEmail(email, password);

  ctx.body = await ctx.service.users.find(userId);
};
