const { GraphQLID, GraphQLNonNull } = require("graphql");
const AuthorType = require("../../schema/AuthorType");
const Author = require("../../models/Author");

const author = {
  type: AuthorType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  async resolve(parent, { id }) {
    return await Author.findById(id);
  },
};

module.exports = author;
