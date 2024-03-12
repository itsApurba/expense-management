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
    approveStatus: {
        body: Joi.object().keys({
            userId: Joi.string().required().custom(objectId),
            expenseId: Joi.string().required().custom(objectId),
            managerId: Joi.string().required().custom(objectId),
            status: Joi.string().valid('APPROVED', 'REJECTED', 'PENDING') 
        })
    }
};

module.exports = expenseValidation