const mongoose = require('mongoose');
const config = require('../config');

//Create connection to mongo DB
const connectMongodDB = () =>
    new Promise((resolve, reject) => {
        const mongoUri = config.DB_LOCAL_CONNECTION;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        if (!mongoUri)
            throw new Error('Mongo URI is required to connect Database!');

        mongoose.connect(mongoUri, options, () => {
            console.log('I-CALL-CENTER-API connected to DB:' + mongoUri);
            resolve("Database connected");
        });
    });
module.exports = connectMongodDB;
