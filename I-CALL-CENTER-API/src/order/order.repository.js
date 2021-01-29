const Order = require('./order.model');

const find = async () => {
    const orderResolve = await Order.find();
    return orderResolve;
};

const save = async (orderData) => {
    const order = new Order({
        customerId: orderData.customerId,
        productId: orderData.productId,
        amount: orderData.amount
    });

    try {
        const orderResolve = await order.save();
        return orderResolve;
    } catch (err) {
        throw err;
    }
};

module.exports = { find, save };