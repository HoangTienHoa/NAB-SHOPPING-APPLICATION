const kafka = require('./kafkaInstance');

const init = () => kafka().producer();
const connect = async (producer) => {
    await producer.connect()
    console.log('Producer connected.');
}
const send = async (producer, topic, key, value) => {
    await producer.send({
        topic: topic,
        messages: [{
            key,
            value
        }],
    });
    console.log('Producer sent messages.');
}
const kafkaProducer = { init, connect, send };

module.exports = kafkaProducer;

