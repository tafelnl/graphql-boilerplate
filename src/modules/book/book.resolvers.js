import BookService from './book.service';

export default {
  Query: {
    book: async (ctx, args) => {
      return BookService.get(ctx, args.id);
    },
    books: async (ctx, args) => {
      return BookService.search(ctx, args.input);
    },
    booksFeatured: async (ctx) => {
      return BookService.listFeatured(ctx);
    },
  },
  Mutation: {
    bookCreate: async () => {
      // return BookService.create(ctx, args.input);
    },
  },
  Book: {
    id: async (parent) => {
      return parent.book_id;
    },
    shouldRead: async (parent) => {
      return !!(parent.stars > 4 && parent.featured);
    },
    author: async (parent, ctx) => {
      return BookService.getAuthor(ctx, parent);
    },
  },
};
