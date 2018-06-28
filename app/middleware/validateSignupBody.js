
const createRule = {
  email: {
    type: 'email',
  },
  password: {
    type: 'password',
  },
};

module.exports = async (ctx, next) => {
  ctx.validate(createRule);
  await next();
};
