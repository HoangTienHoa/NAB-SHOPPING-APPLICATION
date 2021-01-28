
const express = require('express');
const constant = require('./product.constant');
const router = express.Router();
const productService = require('./product.service');
const validator = require('./product.validator');

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

module.exports = router;