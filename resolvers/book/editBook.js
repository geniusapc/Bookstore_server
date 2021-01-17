const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
} = require("graphql");

const BookType = require("../../schema/BookType");
const Book = require("../../models/Book");

const addBook = {
  type: BookType || GraphQLBoolean,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent, { id, name, authorId }) {
    await Book.updateOne({ _id: id }, { name, authorId }).orFail();
    return true;
  },
};

module.exports = addBook;
