const logger = require("./logger");
module.exports = () => {
  process.on("unhandledRejection", (ex) => {
    logger.error(ex, ex);
  });
};
