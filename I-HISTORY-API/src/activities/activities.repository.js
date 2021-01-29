const Activities = require('./activities.model');

//Get all activities
const getAllActivities = async () => {
    const resolve = await Activities.find();
    return resolve;
};

//Save Activity
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

module.exports = { getAllActivities, saveActivity };