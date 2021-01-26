const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const connectMongodDB = require('./common/mongoDB');
//Use .evn file to set environment constants
require('dotenv/config');

app.use(bodyParser.json());
const createServer = async () => {
  routes(app);
  await connectMongodDB();
}

createServer();

app.listen(process.env.PORT, function () {
  console.log(`I-COMMERCE-API listening on ${process.env.PORT}`);
});