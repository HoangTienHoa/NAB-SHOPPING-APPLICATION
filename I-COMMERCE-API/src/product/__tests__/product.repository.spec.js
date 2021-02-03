const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const productRepository = require('../product.repository');
const Product = require('../product.model');

jest.mock('mongoose', () => {
    const mongoose = jest.requireActual('mongoose');
    return new mongoose.Mongoose(); // new mongoose instance and connection for each test
});

describe('product.repository', () => {
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
        await mongoose.disconnect();
        await mongod.stop();
    });

    describe("save", () => {
        test('should create and return  product data', async () => {
            const product = {
                id: 1000,
                name: "Space ship",
                price: 999999,
                amount: 2,
                branch: "Tesla",
                color: "white"
            };
            await Product.create(product);
            const spySaveModel = jest.spyOn(Product.prototype, 'save');

            const newProduct = await productRepository.save(product);
            expect(newProduct.id).toEqual(product.id);
            expect(spySaveModel).toHaveBeenCalledTimes(1);
        });
    });

    describe("find", () => {
        test('should find all products', async () => {
            const products = await productRepository.find();
            expect(products.length).toBeGreaterThan(0);
        });
    });

    describe("findOne", () => {
        test('should find a product', async () => {
            const product = new Product({
                id: 1001,
                name: "Macbook",
                price: 1000,
                amount: 960,
                branch: "Apple",
                color: "grey"
            });
            const newProduct = await productRepository.save(product);
            const productResolved = await productRepository.findOne(newProduct.id);
            expect(productResolved.id).toEqual(newProduct.id);
        });
    });

    describe("findProducts", () => {
        test('should find all product with searchkey', async () => {
            const product = await productRepository.findProducts("grey");
            expect(product.length).toBeGreaterThan(0);
        });
    });

    describe("sortProducts", () => {
        test('should sort products', async () => {
            const product = await productRepository.sortProducts('price', 'asc');
            expect(product[0].id).toEqual(1001);
        });
    });

    describe("filterProducts", () => {
        test('should filter products', async () => {
            const product = await productRepository.filterProducts(1, 1000);
            expect(product[0].id).toEqual(1001);
        });
    });

    describe("updateOne", () => {
        test('should update product', async () => {
            const product = await productRepository.findOne(1000);
            product.color = 'red';
            await productRepository.updateOne(product);
            const productResolve = await productRepository.findOne(1000);
            expect(productResolve.color).toEqual('red');
        });
    });


    describe("deleteMany", () => {
        test('should delete all product', async () => {
            await productRepository.deleteMany();
            const products = await productRepository.find();
            expect(products.length).toEqual(0);
        });
    });
});