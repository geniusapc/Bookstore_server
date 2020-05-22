const { GraphQLString, GraphQLNonNull } = require("graphql");
const BookType = require("../../schema/BookType");
const Book = require("../../models/Book");

const addBookSchema = require("../../validate/book/addBook");

const addBook = {
  type: BookType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent, { name, authorId }) {
    const { error } = addBookSchema.validate({ name, authorId });
    if (error) throw new Error(error.details[0].message);
    return await new Book({ name, authorId }).save();
  },
};

module.exports = addBook;
