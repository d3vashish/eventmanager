const joi = require('joi');

const registerValidator =
    joi.object().keys({
        email: joi.string().email().required(),
        password: joi.string().min(6).required(),
        role: joi.string().valid("attendee","organizer").optional(),
    })
module.exports = registerValidator;