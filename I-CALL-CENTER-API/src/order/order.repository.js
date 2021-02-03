const Order = require('./order.model');

const find = async () => {
    const result = await Order.find();
    return result;
};

const save = async (orderData) => {
    const order = new Order({
        customerId: orderData.customerId,
        productId: orderData.productId,
        amount: orderData.amount
    });

    try {
        const result = await order.save();
        return result;
    } catch (err) {
        throw err;
    }
};

module.exports = { find, save };