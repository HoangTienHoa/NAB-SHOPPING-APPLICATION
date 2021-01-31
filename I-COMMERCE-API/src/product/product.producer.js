const kafkaProducer = require('../common/kafka/producer');

const getProducer = async () => {
    const producer = kafkaProducer.init();
    await kafkaProducer.connect(producer);
    return producer;
}

const sendMessage = async (producer, topic, key, value) => {
    await kafkaProducer.send(producer, topic, key, value);
}

module.exports = { getProducer, sendMessage };
