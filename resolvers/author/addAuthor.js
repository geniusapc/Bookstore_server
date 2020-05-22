const { GraphQLString, GraphQLInt, GraphQLNonNull } = require("graphql");
const AuthorType = require("../../schema/AuthorType");
const Author = require("../../models/Author");
const addAuthorSchema = require("../../validate/author/addAuthor");

const addAuthor = {
  type: AuthorType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) },
  },
  async resolve(parent, { name, age }) {
    const { error } = addAuthorSchema.validate({ name, age });
    if (error) throw new Error(error.details[0].message);
    return await new Author({ name, age }).save();
  },
};

module.exports = addAuthor;
