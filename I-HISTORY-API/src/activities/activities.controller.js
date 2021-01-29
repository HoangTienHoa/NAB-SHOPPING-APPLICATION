
const express = require('express');
const router = express.Router();
const activityService = require('./activities.service');
const constant = require('./activities.constant');

//Save An Activity
router.post('/', async (req, res) => {
    try {
        const resolved = await activityService.saveActivity(req.body.activity);
        return res.status(200).json(resolved);
    } catch (err) {
        console.log({ message: err });
        return res.status(500).send(constant.MONGODB_ERROR);
    }
});

module.exports = router;