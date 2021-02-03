const productRepository = require('./product.repository');
const constant = require('./product.constant');
const KafkaProducer = require('./product.producer');
const config = require('../config');

//Get all products
const getAllProducts = async () => {
    try {
        const result = await productRepository.find();
        return result;
    } catch (err) {
        throw err;
    }
};

//Get a product
const getAProduct = async (productId) => {
    try {
        const result = await productRepository.findOne(productId);
        return result;
    } catch (err) {
        throw err;
    }
};

//Save a product
const saveAProduct = async (product) => {
    try {
        const result = await productRepository.save(product);
        return result;
    } catch (err) {
        throw err;
    }
};

//Delete all products
const deleteAllProducts = async () => {
    try {
        const result = await productRepository.deleteMany();
        return result;
    } catch (err) {
        throw err;
    }
};

//Search products by name, branch, color
const searchProducts = async (info) => {
    try {
        const result = await productRepository.findProducts(info);
        return result;
    } catch (err) {
        throw err;
    }
}

//Sort products by column
const sortProducts = async (colName, colOrder) => {
    try {
        const result = await productRepository.sortProducts(colName, colOrder);
        return result;
    } catch (err) {
        throw err;
    }
}
//Filter products by price
const filterProducts = async (fromPrice, toPrice) => {
    try {
        const result = await productRepository.filterProducts(fromPrice, toPrice);
        return result;
    } catch (err) {
        throw err;
    }
}

//Update a product
const updateProduct = async (product) => {
    try {
        const result = await productRepository.updateOne(product);
        return result;
    } catch (err) {
        throw err;
    }
};

//Recheck Order a product
const recheckOrderProduct = async (productId, amount) => {
    try {
        //Find a product
        const product = await productRepository.findOne(productId);

        //In case can not found a product
        if (product == null)
            throw new Error(constant.PRODUCT_NOT_EXIST);

        //In case not enought amount
        if (product.amount < amount)
            throw new Error(constant.AMOUNT_NOT_ENOUGHT);

        //Update Product info
        product.amount -= amount;
        product.modifiedAt = Date.now();
        return product;
    } catch (err) {
        throw err;
    }
};

const sendActivities = async (req, res, next) => {
    try {
        const producer = await KafkaProducer.getProducer();
        KafkaProducer.sendMessage(producer, config.TOPIC_SAVE_ACTIVITIES, req.sessionID, req.path);
    } catch (err) {
        console.log(err);
    } finally {
        next();
    }
}

module.exports = {
    getAllProducts,
    getAProduct,
    saveAProduct,
    deleteAllProducts,
    searchProducts,
    sortProducts,
    filterProducts,
    updateProduct,
    recheckOrderProduct,
    sendActivities
};