const DefaultDao = require('~/modules/default/dao');

module.exports = class BookDao extends DefaultDao {
  // methods like the one below can be used to avoid repetitive code
  async listByTitle(title) {
    return this.db.book.find({ title: title }, true, true);
  }
};
