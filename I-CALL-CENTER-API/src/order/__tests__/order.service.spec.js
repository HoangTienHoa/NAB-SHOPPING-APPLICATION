const orderService = require("../order.service");
const orderRepository = require("../order.repository");

jest.mock('../order.repository');

describe('order.service', () => {
    afterEach(async () => {
        expect.hasAssertions();
        jest.clearAllMocks();
    });

    describe('getAllOrders', () => {
        it('should get and return orders data', async () => {
            const orderData = [{
                customerId: "customerId",
                productId: "productId",
                amount: 100,
                status: "Fulfill",
                isDeleted: false
            }]
            orderRepository.find.mockResolvedValueOnce(orderData);

            const result = await orderService.getAllOrders();

            expect(result).toEqual(orderData);
            expect(orderRepository.find).toHaveBeenCalledWith();
        })

        it('should throw exception', async () => {
            const error = "get error";
            orderRepository.find.mockRejectedValueOnce(error);

            const result = await orderService.getAllOrders().catch(err => err);

            expect(result).toEqual(error);
        })
    });

    describe('saveAnOrder', () => {
        it('should save an order and return data', async () => {
            const orderData = [{
                customerId: "customerId",
                productId: "productId",
                amount: 100,
                status: "Fulfill",
                isDeleted: false
            }]
            orderRepository.save.mockResolvedValueOnce(orderData);

            const result = await orderService.saveAnOrder(orderData);

            expect(result).toEqual(orderData);
            expect(orderRepository.save).toHaveBeenCalledWith(orderData);
        })

        it('should throw exception', async () => {
            const error = "save error";
            orderRepository.save.mockRejectedValueOnce(error);

            const result = await orderService.saveAnOrder({}).catch(err => err);

            expect(result).toEqual(error);
        })
    });
});