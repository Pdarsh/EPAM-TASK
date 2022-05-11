const Joi = require("joi");

const UserSchema = Joi.object({
  id: Joi.string(),
  login: Joi.string().email().required().lowercase(),
  password: Joi.string()
    .alphanum()
    .min(5)
    .pattern(new RegExp("^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$")).required(),
  age: Joi.number().integer().min(4).max(130).required(),
  isDeleted: Joi.boolean(),
});

module.exports = UserSchema
