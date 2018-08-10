'use strict';

const Service = require('egg').Service;
class UsersService extends Service {
  async find(id) {
    const user = await this.app.mysql.select('users', {
      where: { id },
      columns: [ 'id', 'account', 'email', 'nickname', 'cover' ],
      limit: 1,
    });

    return user[0];
  }
  async findByEmail(email) {
    const user = await this.app.mysql.select('users', {
      where: { email },
      columns: [ 'id', 'account', 'email', 'nickname', 'cover' ],
      limit: 1,
    });

    return user[0];
  }

  async createByThirdparty(account, nickname, cover) {
    const result = await this.app.mysql.insert('users', {
      account,
      nickname,
      cover,
    });

    return result.insertId;
  }

  async createByEmail(email, password) {
    const account = email;
    const nickname = account;
    const result = await this.app.mysql.insert('users', {
      account,
      nickname,
      email,
      password,
    });

    return result.insertId;
  }
}
module.exports = UsersService;
