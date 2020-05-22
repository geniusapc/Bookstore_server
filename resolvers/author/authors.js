const { GraphQLList } = require("graphql");
const AuthorType = require("../../schema/AuthorType");
const Author = require("../../models/Author");

const authors = {
  name: "Authors",
  type: new GraphQLList(AuthorType),
  async resolve() {
    return await Author.find();
  },
};

module.exports = authors;
