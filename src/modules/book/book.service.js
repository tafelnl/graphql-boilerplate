const BookDao = require('./book.dao');
const AuthorService = require('~/modules/author/author.service');

module.exports = class BookService {
  static async get(ctx, id) {
    const bookDao = new BookDao();
    return bookDao.getById(id);
  }

  static async search(ctx, input) {
    const bookDao = new BookDao();
    if (input.author) {
      // @QUESTION(2)
      // best way to search a book by an author
      const authors = await AuthorService.search(ctx, {
        author_id: input.author.id,
        name: input.author.name,
      });
      const authorIds = authors.map(({ author_id }) => author_id);
      // related to @QUESTION(2)
      // because it returns al the books with these authorIds
      // it ignores the other filter input
      return bookDao.listByAuthorIds(authorIds);
    }
    return bookDao.find(input, true, true);
  }

  static async listFeatured() {
    const bookDao = new BookDao();
    return bookDao.find({ featured: true }, true);
  }

  static async getAuthor(ctx, book) {
    // @QUESTION(1)
    // how to guarantee that author_id is available here?
    // since the parent data is not guaranteed to have that available
    const author_id = book?.author_id;
    return AuthorService.get(ctx, author_id);
  }
};
