const Joi = require('joi');

const updateUserScheme = Joi.object({
    login: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z]{3,30}$')),
    repeat_password: Joi.ref('password')
})
    .with('password', 'repeat_password')

module.exports = updateUserScheme;