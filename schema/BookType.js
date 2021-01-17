const graphql = require("graphql");
const Author = require("../models/Author");

const { GraphQLString, GraphQLID, GraphQLObjectType } = graphql;

const Booktype = new GraphQLObjectType({
  name: "book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    authorId: { type: GraphQLID },
    author: { ...authors() },
  }),
});

const authors = () => {
  const AuthorType = require("./AuthorType");
  return {
    type: AuthorType,
    async resolve({ authorId }) {
      return await Author.findById(authorId);
    },
  };
};
module.exports = Booktype;
