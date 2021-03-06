'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middlewares } = app;
  router.post('/thirdparty/login', middlewares.processRequest, middlewares.validateThirdpartyLoginBody, controller.accounts.thirdpartyLogin);
  router.post('/signup', middlewares.processRequest, middlewares.validateSignupBody, controller.accounts.signup);
  router.get('/verify/:code', middlewares.validateVerifyCodeBody, controller.accounts.verifyCode);


  router.get('/user', middlewares.processRequest, middlewares.isLogin, controller.users.getUser);

  router.get('/favorites', middlewares.processRequest, middlewares.isLogin, controller.favorites.getFavorites);
  router.post('/favorite', middlewares.processRequest, middlewares.validateCreateFavoriteBody, middlewares.isLogin, controller.favorites.createFavorite);
  router.del('/favorite/:favoriteId', middlewares.processRequest, middlewares.validateDeleteFavoriteParam, middlewares.isLogin, controller.favorites.deleteFavorite);

  // app.io.of('/')
  app.io.route('chat', app.io.controller.chat.index);

  // app.io.of('/chat')
  app.io.of('/chat').route('chat', app.io.controller.chat.index);
};
