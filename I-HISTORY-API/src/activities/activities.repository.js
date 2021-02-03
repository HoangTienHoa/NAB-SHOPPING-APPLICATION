const Activities = require('./activities.model');

const find = async () => {
    const result = await Activities.find();
    return result;
};
const save = async (activityData) => {
    const activity = new Activities({
        customerId: activityData.customerId,
        action: activityData.action
    });

    try {
        const result = await activity.save();
        return result;
    } catch (err) {
        throw err;
    }
};

module.exports = { find, save };