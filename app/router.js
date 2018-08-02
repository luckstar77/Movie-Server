'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middlewares } = app;
  router.post('/thirdparty/login', middlewares.processRequest, middlewares.validateThirdpartyLoginBody, controller.accounts.thirdpartyLogin);
  router.post('/user', middlewares.processRequest, middlewares.isLogin, controller.users.getUser);
};
