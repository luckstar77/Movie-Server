'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middlewares } = app;
  router.post('/thirdparty/login', middlewares.logRequest, middlewares.validateThirdpartyLoginBody, controller.accounts.thirdpartyLogin);
};
