const Joi = require("@hapi/joi");

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  authorId: Joi.string().max(50).required(),
});

module.exports = schema;
