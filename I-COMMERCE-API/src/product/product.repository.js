const Product = require('./product.model');

//Get all products
const getAllProducts = async () => {
    const productResolve = await Product.find();
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
    //     try {
    //         const productResolve = await Product.aggregate(
    //             { $filter: { price: { $eq: "Joe Bloggs" } } }
    //         );
    //         return productResolve;
    //         //$and: [
    //         // { $or: [{ qty: { $lt: 10 } }, { qty: { $gt: 50 } }] },
    //         // { $or: [{ sale: true }, { price: { $lt: 5 } }] }
    //     ]
    //     } catch (err) {
    //     throw err;
    // }
}
module.exports = { getAllProducts, saveAProduct, deleteAllProducts, searchProducts, sortProducts };