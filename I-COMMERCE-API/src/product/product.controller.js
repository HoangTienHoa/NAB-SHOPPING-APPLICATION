
const express = require('express');
const constant = require('./product.constant');
const router = express.Router();
const productService = require('./product.service');
const validator = require('./product.validator');
const axios = require('axios');
const config = require('../config');

//Get All Products
router.get('/', async (req, res) => {
    try {
        const productResolve = await productService.getAllProducts();
        return res.json(productResolve);
    } catch (err) {
        console.log({ message: err });
        return res.status(500).send(constant.MONGODB_ERROR);
    }
});

//Search By Name, Branch, Color
router.get('/search/:info', async (req, res) => {
    const info = req.params.info;
    try {
        const productResolve = await productService.searchProducts(info);
        return res.json(productResolve);
    } catch (err) {
        console.log({ message: err });
        return res.status(500).send(constant.MONGODB_ERROR);
    }
});

//Sort By Column Name
router.get('/sort/:colName/:colOrder', async (req, res) => {
    const colName = req.params.colName;
    const colOrder = req.params.colOrder == "asc" ? 1 : -1;

    //Validation
    const { error } = validator.validationSort({ colName });
    if (error)
        return res.status(400).send(error.details[0].message);

    try {
        const productResolve = await productService.sortProducts(colName, colOrder);
        return res.json(productResolve);
    } catch (err) {
        console.log({ message: err });
        return res.status(500).send(constant.MONGODB_ERROR);
    }
});

//Filter By Price
router.get('/filter/:fromPrice/:toPrice', async (req, res) => {
    const fromPrice = req.params.fromPrice;
    const toPrice = req.params.toPrice;

    //Validation
    const { error } = validator.validationFilter({ fromPrice, toPrice });
    if (error)
        return res.status(400).send(error.details[0].message);

    try {
        const productResolve = await productService.filterProducts(fromPrice, toPrice);
        return res.json(productResolve);
    } catch (err) {
        console.log({ message: err });
        return res.status(500).send(constant.MONGODB_ERROR);
    }
});

//Order a product
router.get('/order/:productId/:amount', async (req, res) => {
    const productId = req.params.productId;
    const amount = req.params.amount;
    const customerId = req.sessionID;

    //Validation
    const { error } = validator.validationOrder({ productId, amount });
    if (error)
        return res.status(400).send(error.details[0].message);

    try {
        //Check valid product id and avaiable amount.
        const product = await productService.recheckOrderProduct(productId, amount);
        const order = {
            "order": {
                customerId,
                productId,
                amount
            }
        };
        try {
            //Synchronous communication. Send request to place a order to I-CALL-CENTER-API
            const placedOrder = await axios.post(`${config.I_CALL_CENTER_URL}:${config.I_CALL_CENTER_PORT}/${config.I_CALL_CENTER_ORDER_URI}`, order);
            await productService.updateProduct(product);
            return res.json(constant.ORDER_SUCCESSFULLY + placedOrder.data._id);
        } catch (err) {
            console.log({ message: err });
            return res.json(constant.ORDER_NOT_SUCCESSFULLY);
        }
    } catch (err) {
        console.log({ message: err });
        return res.status(400).send(err.message);
    }
});

module.exports = router;