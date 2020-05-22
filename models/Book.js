const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: String,
  authorId: String,
});

const Book = mongoose.model("Book", schema);
module.exports = Book;
