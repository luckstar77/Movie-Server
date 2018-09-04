'use strict';

const Service = require('egg').Service;
class ThirdpartiesService extends Service {
  async find(thirdparty_id, protocol) {
    return await this.app.mysql.get('thirdparties', { thirdparty_id, protocol });
  }

  async create(thirdparty_id, protocol, token, users_id) {
    const result = await this.app.mysql.insert('thirdparties', {
      thirdparty_id,
      protocol,
      token,
      users_id,
    });

    return result.insertId;
  }

  async deleteAll() {
    const result = await this.app.mysql.delete('thirdparties');

    return result;
  }
}

module.exports = ThirdpartiesService;
