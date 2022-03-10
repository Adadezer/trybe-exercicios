const joi = require('joi');

module.exports = joi.object({
  username: joi.string().min(5).alphanum().required().messages({
    'any.required': '400|"username" is required',
    'string.min': '422|"username" length must be at least 5 characters long',
  }),
  password: joi.string().min(5).required()
.messages({
  'any.required': '400|"password" is required',
  'number.min': '422|"password" length must be at least 5 characters long',
  }),
});