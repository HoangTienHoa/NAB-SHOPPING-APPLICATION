const connectMongodDB = require('../mongoDB');

describe("Checking Mongo DB connection", () => {
    test('connectMongodDB is a function', () => {
        expect(typeof connectMongodDB).toEqual('function');
    })

    test('connectMongodDB function exists', () => {
        expect(connectMongodDB).toBeDefined();
    });
});