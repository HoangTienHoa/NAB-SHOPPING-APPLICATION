const Product = require('./product.model');

const find = async () => {
    const result = await Product.find();
    return result;
};

const findOne = async (productId) => {
    const result = await Product.findOne({ id: productId });
    return result;
};

const save = async (productData) => {
    const product = new Product({
        id: productData.id,
        name: productData.name,
        price: productData.price,
        amount: productData.amount,
        branch: productData.branch,
        color: productData.color
    });

    try {
        const result = await product.save();
        return result;
    } catch (err) {
        throw err;
    }
};

const deleteMany = async () => {
    try {
        const result = await Product.deleteMany({});
        return result;
    } catch (err) {
        throw err;
    }
};

const findProducts = async (info) => {
    try {
        const result = await Product.find(
            {
                $or:
                    [
                        { name: { '$regex': info, '$options': 'i' } },
                        { branch: { '$regex': info, '$options': 'i' } },
                        { color: { '$regex': info, '$options': 'i' } },
                    ]
            });
        return result;
    } catch (err) {
        throw err;
    }
}

const sortProducts = async (colName, colOrder) => {
    try {
        const sort = {};
        sort[colName] = colOrder;
        const result = await Product.find().sort(sort);
        return result;
    } catch (err) {
        throw err;
    }
}

const filterProducts = async (fromPrice, toPrice) => {
    try {
        const result = await Product.find({ price: { $gte: fromPrice, $lte: toPrice } });
        return result;
    } catch (err) {
        throw err;
    }
}

const updateOne = async (product) => {
    try {
        const result = await Product.updateOne({ id: product.id },
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
        return result;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    find,
    findOne,
    save,
    deleteMany,
    findProducts,
    sortProducts,
    filterProducts,
    updateOne
};