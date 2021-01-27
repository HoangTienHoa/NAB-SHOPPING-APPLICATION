const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const connectMongodDB = require('./common/mongoDB');
const config = require('./config');
// //Use .evn file to set environment constants
// require('dotenv/config');

app.use(bodyParser.json());
const createServer = async () => {
  routes(app);
  await connectMongodDB();
}

createServer();

app.listen(config.PORT, function () {
  console.log(`I-COMMERCE-API listening on ${config.PORT}`);
});