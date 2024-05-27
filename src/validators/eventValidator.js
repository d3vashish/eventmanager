const joi = require('joi');


const eventValidator = joi.object().keys({
    title: joi.string().required(),
    date: joi.date().iso().required(),
    time: joi.string().required(),
    description: joi.string().required()
})