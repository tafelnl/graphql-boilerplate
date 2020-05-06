const ExampleDefaultDao = require('~/modules/exampleDefault/dao');

module.exports = class BookDao extends ExampleDefaultDao {
  // methods like the one below can be used to avoid repetitive code
  async listByTitle(title) {
    return this.db.book.find({ title: title }, true, true);
  }
};
