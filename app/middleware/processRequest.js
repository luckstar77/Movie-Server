module.exports = async (ctx, next) => {
    ctx.logger.info('request data: %j', ctx.request.body);
    try {
      await next();
    } catch (err) {
      ctx.logger.error('err data: %j', err);
    }
    ctx.logger.info('response data: %j', ctx.body);
  };
  