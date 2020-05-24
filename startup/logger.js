const { createLogger, format, transports } = require("winston");

const { combine, timestamp, label, printf, prettyPrint } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp}  ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp(), myFormat),
  transports: [
    new transports.File({ filename: "./logs/combine.log" }),
    new transports.File({
      filename: "./logs/error.log",
      level: "error",
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(new transports.Console());
}

module.exports = logger;
