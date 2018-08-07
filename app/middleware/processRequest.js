'use strict';

module.exports = async (ctx, next) => {
  ctx.logger.info('request data: %j', ctx.request.body);
  ctx.logger.info('request header: %j', ctx.request.header);
  try {
    await next();
  } catch (err) {
    ctx.logger.error('err data: %j', err);
    ctx.body = err;
    ctx.status = 400;
  }
  ctx.logger.info('response data: %j', ctx.body);
};
