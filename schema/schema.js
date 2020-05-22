const graphql = require("graphql");
const { GraphQLObjectType, GraphQLSchema } = graphql;

const book = require("../resolvers/book/book");
const books = require("../resolvers/book/books");
const addBook = require("../resolvers/book/addBook");
const editBook = require("../resolvers/book/editBook");

const author = require("../resolvers/author/author");
const authors = require("../resolvers/author/authors");
const addAuthor = require("../resolvers/author/addAuthor");

const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book,
    books,
    author,
    authors,
  },
});

const mutation = new GraphQLObjectType({
  name: "mutation",
  fields: { addAuthor, addBook, editBook },
});

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation,
});
