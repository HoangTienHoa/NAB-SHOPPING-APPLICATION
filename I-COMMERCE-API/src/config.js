//Use .evn file to set environment constants
require('dotenv/config');

const config = {
    PORT: process.env.PORT,
    DB_LOCAL_CONNECTION: process.env.DB_LOCAL_CONNECTION,
    DB_DOCKER_CONNECTION: process.env.DB_DOCKER_CONNECTION,

    I_CALL_CENTER_URL: process.env.I_CALL_CENTER_URL,
    I_CALL_CENTER_PORT: process.env.I_CALL_CENTER_PORT,
    I_CALL_CENTER_ORDER_URI: process.env.I_CALL_CENTER_ORDER_URI,

    I_HISTORY_URL: process.env.I_HISTORY_URL,
    I_HISTORY_PORT: process.env.I_HISTORY_PORT,
    I_HISTORY_LOG_ACTION_URI: process.env.I_HISTORY_LOG_ACTION_URI,
}
module.exports = config;