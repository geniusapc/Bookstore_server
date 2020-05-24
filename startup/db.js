const mongoose = require("mongoose");
const config = require("../config");
const logger = require("./logger");

const db = async () => {
  await mongoose.connect(config.dbConnString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  logger.info("connected to database");
};
module.exports = db;
