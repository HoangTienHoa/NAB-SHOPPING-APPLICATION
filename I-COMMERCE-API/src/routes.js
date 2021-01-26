const productsRoute = require('./product/product.controller');

//Import Routes
const routes = (app) => {
    app.use('/product', productsRoute);
};

module.exports = routes;