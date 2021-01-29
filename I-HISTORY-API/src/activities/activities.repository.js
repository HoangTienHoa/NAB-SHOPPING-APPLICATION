const Activities = require('./activities.model');

const find = async () => {
    const resolve = await Activities.find();
    return resolve;
};
const save = async (activityData) => {
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

module.exports = { find, save };