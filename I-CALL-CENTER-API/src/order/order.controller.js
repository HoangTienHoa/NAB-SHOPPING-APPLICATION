
const express = require('express');
const router = express.Router();
const orderService = require('./order.service');
const constant = require('./order.constant');

//Save An Order
router.post('/', async (req, res) => {
    try {
        const orderResolve = await orderService.saveAnOrder(req.body.order);
        return res.status(200).json(orderResolve);
    } catch (err) {
        console.log({ message: err });
        return res.status(500).send(constant.MONGODB_ERROR);
    }
});

module.exports = router;