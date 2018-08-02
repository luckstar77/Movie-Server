module.exports = async (ctx, next) => {
    ctx.logger.info('request data: %j', ctx.request.body);
    await next();
    ctx.logger.info('response data: %j', ctx.body);
  };
  