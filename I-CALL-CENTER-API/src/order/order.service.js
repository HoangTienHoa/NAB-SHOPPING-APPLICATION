const orderRepository = require('./order.repository');

//Get all orders
const getAllOrders = async () => {
    try {
        const result = await orderRepository.find();
        return result;
    } catch (err) {
        throw err;
    }
};

//Save an order
const saveAnOrder = async (order) => {
    try {
        const result = await orderRepository.save(order);
        return result;
    } catch (err) {
        throw err;
    }
};
module.exports = { getAllOrders, saveAnOrder };