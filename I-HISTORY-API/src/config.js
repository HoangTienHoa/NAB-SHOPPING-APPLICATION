//Use .evn file to set environment constants
require('dotenv/config');

const config = {
    PORT: process.env.PORT,
    DB_LOCAL_CONNECTION: process.env.DB_LOCAL_CONNECTION,
    DB_DOCKER_CONNECTION: process.env.DB_DOCKER_CONNECTION
}
module.exports = config;