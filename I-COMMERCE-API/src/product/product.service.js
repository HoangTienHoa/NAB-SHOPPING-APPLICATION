const productRepository = require('./product.repository');

const getAllProducts = async () => {
    try {
        const productResolve = await productRepository.getAllProducts();
        return productResolve;
    } catch (err) {
        throw err;
    }
};

const saveAProduct = async (product) => {
    try {
        const productResolve = await productRepository.saveAProduct(product);
        return productResolve;
    } catch (err) {
        throw err;
    }
};


const deleteAllProducts = async () => {
    try {
        const productResolve = await productRepository.deleteAllProducts();
        return productResolve;
    } catch (err) {
        throw err;
    }
};

const searchProducts = async (info) => {
    try {
        const productResolve = await productRepository.searchProducts(info);
        return productResolve;
    } catch (err) {
        throw err;
    }
}

const sortProducts = async (colName, colOrder) => {
    try {
        const productResolve = await productRepository.sortProducts(colName, colOrder);
        return productResolve;
    } catch (err) {
        throw err;
    }
}
const filterProducts = async (fromPrice, toPrice) => {
    try {
        const productResolve = await productRepository.filterProducts(fromPrice, toPrice);
        return productResolve;
    } catch (err) {
        throw err;
    }
}

module.exports = { getAllProducts, saveAProduct, deleteAllProducts, searchProducts, sortProducts, filterProducts };