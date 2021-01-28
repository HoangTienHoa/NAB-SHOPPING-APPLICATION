const ordersRoute = require('./order/order.controller');

//Import Routes
const routes = (app) => {
    app.use('/order', ordersRoute);
};

module.exports = routes;