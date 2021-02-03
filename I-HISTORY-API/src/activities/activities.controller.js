
const express = require('express');
const router = express.Router();
const activityService = require('./activities.service');
const constant = require('./activities.constant');

//Show all activies
router.get('/', async (req, res) => {
    try {
        const result = await activityService.getAllActivities();
        return res.json(result);
    } catch (err) {
        console.log({ message: err });
        return res.status(500).send(constant.MONGODB_ERROR);
    }
});

module.exports = router;