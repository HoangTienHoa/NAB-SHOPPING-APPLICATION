const orderRepository = require('./order.repository');

//Get all orders
const getAllOrders = async () => {
    try {
        const orderResolve = await orderRepository.find();
        return orderResolve;
    } catch (err) {
        throw err;
    }
};

//Save an order
const saveAnOrder = async (order) => {
    try {
        const orderResolve = await orderRepository.save(order);
        return orderResolve;
    } catch (err) {
        throw err;
    }
};
module.exports = { getAllOrders, saveAnOrder };