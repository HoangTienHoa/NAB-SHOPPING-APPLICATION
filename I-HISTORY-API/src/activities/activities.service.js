const activityRepository = require('./activities.repository');

//Get all activities
const getAllActivities = async () => {
    try {
        const resolve = await activityRepository.find();
        return resolve;
    } catch (err) {
        throw err;
    }
};

//Save Activity
const saveActivity = async (activity) => {
    try {
        const resolve = await activityRepository.save(activity);
        return resolve;
    } catch (err) {
        throw err;
    }
};
module.exports = { getAllActivities, saveActivity };