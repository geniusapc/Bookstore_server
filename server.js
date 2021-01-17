const express = require("express");
const cors = require("cors");
const graphqlHttp = require("express-graphql");
require("./startup/errorHandling")();
const config = require("./config");
const schema = require("./schema/schema");
const db = require("./startup/db");
const logger = require("./startup/logger");

const main = async () => {
  const app = express();
  app.use(cors());
  await db();

  app.use("/graphql", graphqlHttp({ schema, graphiql: true }));

  app.listen(config.port, () =>
    logger.info(`listening to port ${config.port}`)
  );
};
main();
