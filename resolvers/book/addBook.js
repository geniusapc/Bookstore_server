const { GraphQLString, GraphQLNonNull } = require("graphql");
const BookType = require("../../schema/BookType");
const Book = require("../../models/Book");

const addBook = {
  type: BookType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent, { name, authorId }) {
    return await new Book({ name, authorId }).save();
  },
};

module.exports = addBook;
