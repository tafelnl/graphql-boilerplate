export default {
  Query: {},
  Mutation: {},
  Author: {
    id: async (parent) => {
      return parent.author_id;
    },
  },
};
