const Joi = require("joi");

const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    firstname: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    hashedPassword: Joi.string().min(8).max(255).required(),
    role: Joi.string().valid("admin", "user").default("user"),
  });

  const { error } = schema.validate(data);
  return error;
};

module.exports = validate;
