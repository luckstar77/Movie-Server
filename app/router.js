'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/thirdparty/login', app.middlewares.validateThirdpartyLoginBody, controller.account.thirdpartyLogin);
};
