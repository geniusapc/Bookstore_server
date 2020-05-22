const express = require("express");
const graphqlHttp = require("express-graphql");
const config = require("./config");
const schema = require("./schema/schema");
const db = require("./startup/db");

const main = async () => {
  await db();
  const app = express();

  app.use(
    "/graphql",
    graphqlHttp({
      schema,
      graphiql: true,
    })
  );
  app.listen(config.port, () =>
    console.log(`listening to port ${config.port}`)
  );
};

main();
