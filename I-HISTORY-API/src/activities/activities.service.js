const activityRepository = require('./activities.repository');

const saveActivity = async (activity) => {
    try {
        const resolve = await activityRepository.saveActivity(activity);
        return resolve;
    } catch (err) {
        throw err;
    }
};
module.exports = { saveActivity };