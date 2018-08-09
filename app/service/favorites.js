'use strict';

const Service = require('egg').Service;
class FavoritesService extends Service {
  async findList(users_id) {
    return await this.app.mysql.get('favorites', { users_id });
  }

  async create(users_id, movie_id) {
    const result = await this.app.mysql.insert('favorites', {
      users_id,
      movie_id,
    });

    return result.insertId;
  }
}
module.exports = FavoritesService;
