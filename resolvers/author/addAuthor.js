const { GraphQLString, GraphQLInt, GraphQLNonNull } = require("graphql");
const AuthorType = require("../../schema/AuthorType");
const Author = require("../../models/Author");

const addAuthor = {
  type: AuthorType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) },
  },
  async resolve(parent, { name, age }) {
    return await new Author({ name, age }).save();
  },
};

module.exports = addAuthor;
