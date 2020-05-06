// const AuthorService = require('./author.service');

module.exports = {
  Query: {},
  Mutation: {},
  Author: {
    id: async (parent) => {
      return parent.author_id;
    },
  },
};
