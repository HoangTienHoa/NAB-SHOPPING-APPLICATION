const express = require("express");
const app = express();
const request = require("supertest");
const orderService = require("../order.service");
const bodyParser = require('body-parser');
const constant = require('../order.constant');
const routes = require('../../routes');

jest.mock('../order.service');

describe('order.controller', () => {
    let server;
    beforeAll(async () => {
        app.use(bodyParser.json());
        server = routes(app);
    });

    afterEach(async () => {
        expect.hasAssertions();
        jest.clearAllMocks();
    });

    describe('GET /order', () => {
        it('should return 200 and orders data', async () => {
            const orderData = [{
                customerId: "customerId",
                productId: "productId",
                amount: 100,
                status: "Fulfill",
                isDeleted: false
            }]
            orderService.getAllOrders.mockResolvedValueOnce(orderData);

            const response = await request(app).get("/order");

            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual(orderData);
            expect(orderService.getAllOrders).toHaveBeenCalledWith();
        })

        it('should return 500 when service throw exception', async () => {
            orderService.getAllOrders.mockRejectedValueOnce();

            const responseErr = await request(app).get("/order").catch(err => err);

            expect(responseErr.statusCode).toEqual(500);
            expect(responseErr.text).toEqual(constant.MONGODB_ERROR);
        })
    });

    describe('POST /order', () => {
        it('should return 201 and create an order with result', async () => {
            const orderData = {
                customerId: "customerId",
                productId: "productId",
                amount: 100,
                status: "Fulfill",
                isDeleted: false
            }
            orderService.saveAnOrder.mockResolvedValueOnce(orderData);

            const response = await request(app).post("/order").send({ order: orderData });

            expect(response.statusCode).toEqual(201)
            expect(response.body).toEqual(orderData);
            expect(orderService.saveAnOrder).toHaveBeenCalledWith(orderData);
        })

        it('should return 500 when service throw exception', async () => {
            orderService.saveAnOrder.mockRejectedValueOnce();

            const responseErr = await request(app).post("/order").send({}).catch(err => err);

            expect(responseErr.statusCode).toEqual(500);
            expect(responseErr.text).toEqual(constant.MONGODB_ERROR);
        })
    });
});