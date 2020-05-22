const mongoose = require("mongoose");

const db = async () => {
  const connString = "mongodb://localhost/bookShelve";
  await mongoose.connect(
    connString,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("connected to database")
  );
};
module.exports = db;
