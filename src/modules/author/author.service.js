import AuthorDao from './author.dao';

export default class AuthorService {
  static async get(ctx, id) {
    const authorDao = new AuthorDao();
    return authorDao.getById(id);
  }

  static async search(ctx, input) {
    const authorDao = new AuthorDao();
    return authorDao.find(input, true, true);
  }
}
