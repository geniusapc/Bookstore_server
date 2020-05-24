const { createLogger, format, transports } = require("winston");

const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp}  ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp(), myFormat),
  transports: [new transports.File({ filename: "./logs/combine.log" })],
  exceptionHandlers: [
    new transports.File({ filename: "./logs/exceptions.log" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(new transports.Console());
  logger.exceptions.handle(new transports.Console());
}

module.exports = logger;