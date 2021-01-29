const Joi = require('joi');

//Validation for Sort Object
function validationSort(sort) {
    const schema = Joi.object({
        colName: Joi.string().valid('id', 'name', 'price', 'amount', 'branch', 'color')
    });
    return schema.validate(sort);
}

//Validation for Filter Object
function validationFilter(filter) {
    const schema = Joi.object({
        fromPrice: Joi.number(),
        toPrice: Joi.number()
    });
    return schema.validate(filter);
}

//Validation for Order Object
function validationOrder(order) {
    const schema = Joi.object({
        productId: Joi.number(),
        amount: Joi.number().greater(0)
    });
    return schema.validate(order);
}

module.exports = { validationSort, validationFilter, validationOrder };