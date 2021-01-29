const Product = require('./product.model');

const find = async () => {
    const productResolve = await Product.find();
    return productResolve;
};

const findOne = async (productId) => {
    const productResolve = await Product.findOne({ id: productId });
    return productResolve;
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
        const productResolve = await product.save();
        return productResolve;
    } catch (err) {
        throw err;
    }
};

const deleteMany = async () => {
    try {
        const productResolve = await Product.deleteMany({});
        return productResolve;
    } catch (err) {
        throw err;
    }
};

const findProducts = async (info) => {
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

const filterProducts = async (fromPrice, toPrice) => {
    try {
        const productResolve = await Product.find({ price: { $gte: fromPrice, $lte: toPrice } });
        return productResolve;
    } catch (err) {
        throw err;
    }
}

const updateOne = async (product) => {
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