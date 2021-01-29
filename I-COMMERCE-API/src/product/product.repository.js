const Product = require('./product.model');
const config = require('./product.constant');
const constant = require('./product.constant');

//Get all products
const getAllProducts = async () => {
    const productResolve = await Product.find();
    return productResolve;
};

//Get a product
const getAProducts = async (productId) => {
    const productResolve = await Product.findOne({ id: productId });
    return productResolve;
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
        const productResolve = await product.save();
        return productResolve;
    } catch (err) {
        throw err;
    }
};

//Delete all products
const deleteAllProducts = async () => {
    try {
        const productResolve = await Product.deleteMany({});
        return productResolve;
    } catch (err) {
        throw err;
    }
};

//Search products by name, branch, color
const searchProducts = async (info) => {
    try {
        const productResolve = await Product.find(
            {
                $or:
                    [
                        { name: { '$regex': info, '$options': 'i' } },
                        { branch: { '$regex': info, '$options': 'i' } },
                        { color: { '$regex': info, '$options': 'i' } },
                    ]
            });
        return productResolve;
    } catch (err) {
        throw err;
    }
}

//Sort products by column
const sortProducts = async (colName, colOrder) => {
    try {
        const sort = {};
        sort[colName] = colOrder;
        const productResolve = await Product.find().sort(sort);
        return productResolve;
    } catch (err) {
        throw err;
    }
}

//Filter products by price
const filterProducts = async (fromPrice, toPrice) => {
    try {
        const productResolve = await Product.find({ price: { $gte: fromPrice, $lte: toPrice } });
        return productResolve;
    } catch (err) {
        throw err;
    }
}
//Update a product
const updateProduct = async (product) => {
    try {
        const productResolve = await Product.updateOne({ id: product.id },
            {
                $set: {
                    name: product.name,
                    price: product.price,
                    amount: product.amount,
                    branch: product.branch,
                    color: product.color,
                    isDeleted: product.isDeleted,
                    createdAt: product.createdAt,
                    modifiedAt: product.modifiedAt
                }
            });
        return productResolve;
    } catch (err) {
        throw err;
    }
}

//Recheck Order a product
const recheckOrderProduct = async (productId, amount) => {
    try {
        const product = await Product.findOne({ id: productId });
        //In case can not found a product
        if (product == null)
            throw new Error(config.PRODUCT_NOT_EXIST);
        //In case not enought amount
        if (product.amount < amount)
            throw new Error(config.AMOUNT_NOT_ENOUGHT);

        //Update Product info
        product.amount -= amount;
        product.modifiedAt = Date.now();
        return product;
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