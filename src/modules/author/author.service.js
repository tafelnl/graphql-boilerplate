const AuthorDao = require('./author.dao');

module.exports = class AuthorService {

  static async get(ctx, id) {
    const authorDao = new AuthorDao();
    return authorDao.getById(id);
  }

}
