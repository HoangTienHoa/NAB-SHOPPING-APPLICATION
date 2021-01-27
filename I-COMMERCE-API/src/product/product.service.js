const productRepository = require('./product.repository');

const getAllProducts = async () => {
    try {
        const productData = await productRepository.getAllProducts();
        return productData;
    } catch (err) {
        throw err;
    }
};

const saveAProduct = async (product) => {
    try {
        const productData = await productRepository.saveAProduct(product);
        return productData;
    } catch (err) {
        throw err;
    }
};


const deleteAllProducts = async () => {
    try {
        const productData = await productRepository.deleteAllProducts();
        return productData;
    } catch (err) {
        throw err;
    }
};
// if (!productData) {
//     throw new Error(CUSTOMER_NOT_EXISTED);/////
// }
module.exports = { getAllProducts, saveAProduct, deleteAllProducts };