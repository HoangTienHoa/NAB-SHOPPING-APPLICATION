const productRepository = require('./product.repository');

//Get all products
const getAllProducts = async () => {
    try {
        const productResolve = await productRepository.getAllProducts();
        return productResolve;
    } catch (err) {
        throw err;
    }
};

//Get a product
const getAProducts = async (productId) => {
    try {
        const productResolve = await productRepository.getAProducts(productId);
        return productResolve;
    } catch (err) {
        throw err;
    }
};

//Save a product
const saveAProduct = async (product) => {
    try {
        const productResolve = await productRepository.saveAProduct(product);
        return productResolve;
    } catch (err) {
        throw err;
    }
};

//Delete all products
const deleteAllProducts = async () => {
    try {
        const productResolve = await productRepository.deleteAllProducts();
        return productResolve;
    } catch (err) {
        throw err;
    }
};

//Search products by name, branch, color
const searchProducts = async (info) => {
    try {
        const productResolve = await productRepository.searchProducts(info);
        return productResolve;
    } catch (err) {
        throw err;
    }
}

//Sort products by column
const sortProducts = async (colName, colOrder) => {
    try {
        const productResolve = await productRepository.sortProducts(colName, colOrder);
        return productResolve;
    } catch (err) {
        throw err;
    }
}
//Filter products by price
const filterProducts = async (fromPrice, toPrice) => {
    try {
        const productResolve = await productRepository.filterProducts(fromPrice, toPrice);
        return productResolve;
    } catch (err) {
        throw err;
    }
}

//Update a product
const updateProduct = async (product) => {
    try {
        const productResolve = await productRepository.updateProduct(product);
        return productResolve;
    } catch (err) {
        throw err;
    }
};

//Recheck Order a product
const recheckOrderProduct = async (productId, amount) => {
    try {
        const productResolve = await productRepository.recheckOrderProduct(productId, amount);
        return productResolve;
    } catch (err) {
        throw err;
    }
};



module.exports = {
    getAllProducts,
    getAProducts,
    saveAProduct,
    deleteAllProducts,
    searchProducts,
    sortProducts,
    filterProducts,
    updateProduct,
    recheckOrderProduct
};