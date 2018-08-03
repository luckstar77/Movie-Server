module.exports = async (ctx, next) => {
  ctx.validate({
    protocol: {
      type: 'string',
    },
    token: {
      type: 'string',
    },
    id: {
      type: 'string',
    },
  });

  await next();
};
