'use strict';

var request = require('request');

module.exports = async ctx => {
  let user = await ctx.service.users.find(ctx.request.body.id);

  ctx.body = user;
};
