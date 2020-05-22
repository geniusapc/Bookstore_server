const BookType = require("../../schema/BookType");
const { GraphQLID } = require("graphql");
const Books = require("../../models/Book");

const book = {
  type: BookType,
  args: { id: { type: GraphQLID } },
  async resolve(parent, args) {
    return {}; //await Books.findById(args.id);
  },
};

module.exports = book;
