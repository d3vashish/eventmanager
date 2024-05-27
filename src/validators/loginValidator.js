const joi = require("joi");

const loginValidator =
    joi.object().keys({
        email: joi.string().email().required(),
        password: joi.string().required()
    })
module.exports = loginValidator;