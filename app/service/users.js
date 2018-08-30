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

  async sendVerificationCode(to, userId) {
    const authority = this.app.jwt.verify(userId, this.app.config.jwt.secret);
    const data = {
      from: 'Movie Service <postmaster@sandbox7dbea47231184c5d98b35f5e5363cdc4.mailgun.org>',
      to,
      subject: 'Movie Authority',
      text: `<a href=${authority} target="_blank">${authority}</a>`,
    };

    return await this.app.mailgun.messages().send(data);
  }
}
module.exports = UsersService;
