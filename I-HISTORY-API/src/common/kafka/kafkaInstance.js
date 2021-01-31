const { Kafka } = require('kafkajs');
const config = require('../../config');

const getKafkaInstance = () => {
    const kafka = new Kafka({
        clientId: config.CLIENT_ID,
        brokers: [`${config.KAFKA_HOST}:${config.KAFKA_PORT}`]
    });
    return kafka;
}
module.exports = getKafkaInstance;