const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const connectMongodDB = require('./common/mongoDB');
const config = require('./config');

app.use(bodyParser.json());
const createServer = async () => {
  routes(app);
  await connectMongodDB();
  return "Created Server";
}

createServer();

app.listen(config.PORT, function () {
  console.log(`I-HISTORY-API listening on ${config.PORT}`);
});

module.exports = createServer;