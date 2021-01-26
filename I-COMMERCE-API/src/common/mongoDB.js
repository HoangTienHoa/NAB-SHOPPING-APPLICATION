const mongoose = require('mongoose');

const connectMongodDB = () =>
    new Promise((resolve, reject) => {
        const mongoUri = process.env.DB_LOCAL_CONNECTION;
        const options = {
            useNewUrlParser: true
        };

        if (!mongoUri)
            throw new Error('Mongo URI is required to connect Database!');

        mongoose.connect(mongoUri, options, () => {
            console.log('I-COMMERCE-API connected to DB:' + mongoUri);
            resolve();
        });
    });
module.exports = connectMongodDB;
