const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const orderRepository = require("../order.repository");
const Order = require('../order.model');

jest.mock('mongoose', () => {
  const mongoose = jest.requireActual('mongoose');
  return new mongoose.Mongoose(); // new mongoose instance and connection for each test
});


describe('order.repository', () => {
  let mongod;
  beforeAll(async () => {
    mongod = new MongoMemoryServer();
    const mongoDbUri = await mongod.getUri();
    await mongoose.connect(mongoDbUri, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterEach(async () => {
    expect.hasAssertions();
    jest.clearAllMocks();
  });

  afterAll(async () => {
    mongoose.disconnect();
    mongod.stop();
  });

  describe('find', () => {
    it('should find and return orders data', async () => {
      const orderData = {
        customerId: "customerId",
        productId: 1,
        amount: 100,
        status: "Fulfill",
        isDeleted: false
      }
      await Order.create(orderData);

      const result = await orderRepository.find();
      expect(result.length).toEqual(1);
      expect(result[0].productId).toEqual(orderData.productId);
    })
  });

  describe('save', () => {
    it('should create and return order data', async () => {
      const orderData = {
        customerId: "customerId",
        productId: 1,
        amount: 100
      }
      const spySaveModel = jest.spyOn(Order.prototype, 'save');
      const result = await orderRepository.save(orderData);

      expect(result.customerId).toEqual(orderData.customerId);
      expect(spySaveModel).toHaveBeenCalledTimes(1);
    })
  });
});