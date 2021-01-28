const orderRepository = require('./order.repository');

const saveAnOrder = async (order) => {
    try {
        const orderResolve = await orderRepository.saveAnOrder(order);
        return orderResolve;
    } catch (err) {
        throw err;
    }
};
module.exports = { saveAnOrder };