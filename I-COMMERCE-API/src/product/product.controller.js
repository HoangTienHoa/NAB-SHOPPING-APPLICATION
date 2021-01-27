
const express = require('express');
const router = express.Router();

const productService = require('./product.service');

//Get All Products
router.get('/', async (req, res) => {
    try {
        const productResolve = await productService.getAllProducts();
        res.json(productResolve);
    } catch (err) {
        res.json({ message: err });
    }
});

//Search
router.get('/search/:info', async (req, res) => {
    const info = req.params.info;
    try {
        const productResolve = await productService.searchProducts(info);
        res.json(productResolve);
    } catch (err) {
        res.json({ message: err });
    }
});

//Sort  By Column Name
router.get('/sort/:colName/:colOrder', async (req, res) => {
    const colName = req.params.colName;
    const colOrder = req.params.colOrder == "asc" ? 1 : -1;
    try {
        const productResolve = await productService.sortProducts(colName, colOrder);
        res.json(productResolve);
    } catch (err) {
        res.json({ message: err });
    }
});

//Filter By Price
router.get('/filter/:fromPrice/:toPrice', async (req, res) => {

    //TODO: validation number

    const fromPrice = req.params.fromPrice;
    const toPrice = req.params.toPrice;

    // try {
    //     const productResolve = await productService.getAllProducts();
    //     res.json(productResolve);
    // } catch (err) {
    //     res.json({ message: err });
    // }
});

module.exports = router;