const kafka = require('./kafkaInstance');
const config = require('../../config');

const init = () => kafka().consumer({ groupId: config.GROUP_ID });

const connectSubscribeRun = async (consumer, topic, handler) => {
    await consumer.connect();
    console.log('Consumer connected');

    await consumer.subscribe({ topic: topic, fromBeginning: true });
    console.log(`Consumer listenning on topic ${topic}`);

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            handler(message.key.toString(), message.value.toString());
        },
    });
}

const kafkaConsumer = { init, connectSubscribeRun };

module.exports = kafkaConsumer;