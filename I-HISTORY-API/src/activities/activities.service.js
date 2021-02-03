const activityRepository = require('./activities.repository');
const KafkaConsumer = require('./activities.consumer');
const config = require('../config');
//Get all activities
const getAllActivities = async () => {
    try {
        const result = await activityRepository.find();
        return result;
    } catch (err) {
        throw err;
    }
};

//Save Activity
const saveActivity = async (customerId, action) => {
    try {
        const activity = {
            customerId,
            action
        }
        const result = await activityRepository.save(activity);
        return result;
    } catch (err) {
        throw err;
    }
};
//Consumer save Activities Event
const consumerSaveActivitiesEvent = () => {
    console.log('consumer for Save Activities is listening');
    KafkaConsumer.intiConnectSubscribeRun(config.TOPIC_SAVE_ACTIVITIES, saveActivity);
}
module.exports = { getAllActivities, saveActivity, consumerSaveActivitiesEvent };