const BookDao = require('./book.dao');
const AuthorService = require('~/modules/author/author.service');

module.exports = class BookService {
  static async get(ctx, id) {
    const bookDao = new BookDao();
    return bookDao.getById(id);
  }

  static async search(ctx, input) {
    const bookDao = new BookDao();
    return bookDao.find(input, true, true);
  }

  static async listFeatured() {
    const bookDao = new BookDao();
    return bookDao.find({ featured: true }, true);
  }

  static async getAuthor(ctx, book) {
    // @QUESTION
    // how to guarantee that author_id is available here?
    // since the parent data is nog guaranteed to have that available
    const author_id = book?.author_id;
    return AuthorService.get(ctx, author_id);
  }
};
