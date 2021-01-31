const activityRepository = require('./activities.repository');
const KafkaConsumer = require('./activities.consumer');
const config = require('../config');
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
const saveActivity = async (customerId, action) => {
    try {
        const activity = {
            customerId,
            action
        }
        const resolve = await activityRepository.save(activity);
        return resolve;
    } catch (err) {
        throw err;
    }
};
//Consumer save Activities Event
const consumerSaveActivitiesEvent = () => {
    console.log('consumer for Save Activities is listening');
    KafkaConsumer.intiConnectSubscribeRun(config.TOPIC_SAVE_ACTIVITIES, saveActivity);
}
module.exports = { getAllActivities, consumerSaveActivitiesEvent };