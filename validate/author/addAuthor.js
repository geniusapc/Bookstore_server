const Joi = require("@hapi/joi");

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  age: Joi.number().required(),
});

module.exports = schema;
