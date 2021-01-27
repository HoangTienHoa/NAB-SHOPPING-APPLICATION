const Product = require('./product.model');

//Get all products
const getAllProducts = async () => {
    const products = await Product.find();
    return products;
};

//Save a product
const saveAProduct = async (productData) => {
    const product = new Product({
        id: productData.id,
        name: productData.name,
        price: productData.price,
        amount: productData.amount,
        branch: productData.branch,
        color: productData.color
    });

    try {
        const savedProduct = await product.save();
        return savedProduct;
    } catch (err) {
        throw err;
    }
};

//Delete all products
const deleteAllProducts = async () => {
    try {
        const removedProduct = await Product.deleteMany({});
        return removedProduct;
    } catch (err) {
        throw err;
    }
};
module.exports = { getAllProducts, saveAProduct, deleteAllProducts };