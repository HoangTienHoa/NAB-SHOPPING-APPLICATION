const Activities = require('./activities.model');

//Save an activity
const saveActivity = async (activityData) => {
    const activity = new Activities({
        customerId: activityData.customerId,
        action: activityData.action
    });

    try {
        const resolve = await activity.save();
        return resolve;
    } catch (err) {
        throw err;
    }
};

module.exports = { saveActivity };