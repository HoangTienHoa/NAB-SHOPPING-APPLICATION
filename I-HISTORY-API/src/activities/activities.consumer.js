const kafkaConsumer = require('../common/kafka/consumer');

const intiConnectSubscribeRun = async (topic, handler) => {
    const consumer = kafkaConsumer.init();
    await kafkaConsumer.connectSubscribeRun(consumer, topic, handler);
}

module.exports = { intiConnectSubscribeRun };
