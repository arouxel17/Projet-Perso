const Joi = require("joi");

const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30),
    firstname: Joi.string().min(3).max(30),
    email: Joi.string().email().required(),
    hashedPassword: Joi.string().min(6).max(255).required(),
    role: Joi.string().valid("admin", "user").default("user"),
  });

  const { error } = schema.validate(data);
  return error;
};

module.exports = validate;
