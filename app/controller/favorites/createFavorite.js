'use strict';

module.exports = async ctx => {
  const users_id = ctx.user.id;
  const movie_id = ctx.request.body.movie_id;
  const id = await ctx.service.favorites.create(users_id, movie_id);

  ctx.body = {
    id,
    users_id,
    movie_id,
  };
};
