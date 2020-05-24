const express = require("express");
const graphqlHttp = require("express-graphql");
const config = require("./config");
const schema = require("./schema/schema");
const db = require("./startup/db");
const logger = require("./startup/logger");

process.on("unhandledRejection", (ex) => {
  logger.error(ex, ex);
});

const main = async () => {
  const app = express();
  await db();

  app.use("/graphql", graphqlHttp({ schema, graphiql: true }));

  app.listen(config.port, () =>
    logger.info(`listening to port ${config.port}`)
  );
};

main();