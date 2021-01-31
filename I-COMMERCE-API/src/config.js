//Use .evn file to set environment constants
require('dotenv/config');

const config = {
    PORT: process.env.PORT,
    DB_LOCAL_CONNECTION: process.env.DB_LOCAL_CONNECTION,
    DB_DOCKER_CONNECTION: process.env.DB_DOCKER_CONNECTION,

    I_CALL_CENTER_URL: process.env.I_CALL_CENTER_URL,
    I_CALL_CENTER_PORT: process.env.I_CALL_CENTER_PORT,
    I_CALL_CENTER_ORDER_URI: process.env.I_CALL_CENTER_ORDER_URI,

    KAFKA_HOST: process.env.KAFKA_HOST,
    KAFKA_PORT: process.env.KAFKA_PORT,
    CLIENT_ID: process.env.CLIENT_ID,
    GROUP_ID: process.env.GROUP_ID,
    TOPIC_SAVE_ACTIVITIES: process.env.TOPIC_SAVE_ACTIVITIES
}
module.exports = config;