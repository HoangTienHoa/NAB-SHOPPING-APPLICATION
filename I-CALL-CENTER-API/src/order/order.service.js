const orderRepository = require('./order.repository');

//Get all orders
const getAllOrders = async () => {
    try {
        const orderResolve = await orderRepository.getAllOrders();
        return orderResolve;
    } catch (err) {
        throw err;
    }
};

//Save an order
const saveAnOrder = async (order) => {
    try {
        const orderResolve = await orderRepository.saveAnOrder(order);
        return orderResolve;
    } catch (err) {
        throw err;
    }
};
module.exports = { getAllOrders, saveAnOrder };