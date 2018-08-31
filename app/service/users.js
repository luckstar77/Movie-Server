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

  async deleteAll() {
    const result = await this.app.mysql.delete('users');

    return result;
  }

  async sendVerificationCode(to, userId) {
    try {
      const authority = this.app.jwt.sign(JSON.stringify({ userId }), this.app.config.jwt.secret);
      const data = {
        from: 'Movie Service <postmaster@sandbox7dbea47231184c5d98b35f5e5363cdc4.mailgun.org>',
        to,
        subject: 'Movie Authority',
        html: `<a href=${authority} target="_blank">${authority}</a>`,
      };

      this.app.logger.info(await this.app.mailgun.messages().send(data));
    } catch (err) {
      this.app.logger.info('mailgun err: %j', err);
    }
  }
}
module.exports = UsersService;
