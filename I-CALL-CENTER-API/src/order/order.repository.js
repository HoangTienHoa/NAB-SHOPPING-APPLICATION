const Order = require('./order.model');

//Get all orders
const getAllOrders = async () => {
    const orderResolve = await Order.find();
    return orderResolve;
};

//Save an order
const saveAnOrder = async (orderData) => {
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

module.exports = { getAllOrders, saveAnOrder };