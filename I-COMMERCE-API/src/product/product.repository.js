const Product = require('./product.model');

//Get all products
const getAllProduct = async () => {
    const products = await Product.find();
    return products;
};
module.exports = { getAllProduct };