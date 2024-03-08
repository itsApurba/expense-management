const Joi = require("joi");
const { objectId } = require("./custom.validation");

const expenseValidation = {
    createExpense: {
        body: Joi.object().keys({
            userId: Joi.string().required().custom(objectId),
            name: Joi.string().required(),
            amount: Joi.number().required(),
            description: Joi.string().required(),
        }),
    },
};

module.exports = expenseValidation