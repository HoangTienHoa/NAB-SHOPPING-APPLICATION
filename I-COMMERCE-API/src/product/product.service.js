const productRepository = require('./product.repository');

const getAllProduct = async () => {
    try {
        const productData = await productRepository.getAllProduct();
        return productData;
    } catch (err) {
        throw err;
    }
};
// if (!productData) {
//     throw new Error(CUSTOMER_NOT_EXISTED);/////
// }
module.exports = { getAllProduct };