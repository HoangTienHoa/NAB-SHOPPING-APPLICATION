
const express = require('express');
const router = express.Router();

const productService = require('./product.service');

//Get all products
router.get('/', async (req, res) => {
    try {
        const products = await productService.getAllProduct();
        res.json(products);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;