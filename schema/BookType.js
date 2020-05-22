const graphql = require("graphql");
const Author = require("../models/Author");

const { GraphQLString, GraphQLID, GraphQLObjectType } = graphql;

const Booktype = new GraphQLObjectType({
  name: "book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    authorId: { type: GraphQLID },
    authors: { ...authors() },
  }),
});

const authors = () => {
  const AuthorType = require("./AuthorType");
  return {
    type: AuthorType,
    resolve({ authorId }) {
      return Author.findById(authorId);
    },
  };
};

module.exports = Booktype;
