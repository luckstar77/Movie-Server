const Service = require('egg').Service;
class UsersService extends Service {
  async find(id) {
    const user = await this.app.mysql.select('users', {
      where: { id },
      colums: [ 'id', 'account', 'email', 'nickname', 'created', 'updated' ],
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
}
module.exports = UsersService;
