const graphql = require("graphql");
const {
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
} = graphql;

const Book = require("../models/Book");
const BookType = require("./BookType");

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      async resolve(parent) {
        return await Book.find({ authorId: parent.id });
      },
    },
  }),
});
module.exports = AuthorType;
