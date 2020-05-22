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
    const me = await Book.updateOne({ id }, { name, authorId });
    console.log(me)

    return true;
  },
};

module.exports = addBook;
