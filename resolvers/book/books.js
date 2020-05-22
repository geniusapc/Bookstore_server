const BookType = require("../../schema/BookType");
const { GraphQLList } = require("graphql");
const Book = require("../../models/Book");

const books = {
  type: new GraphQLList(BookType),
  async resolve() {
    return await Book.find({});
  },
};

module.exports = books;
