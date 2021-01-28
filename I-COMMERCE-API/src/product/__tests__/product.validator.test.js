const validator = require('../product.validator');
describe("Checking method validationSort", () => {
    test('Should is a function', () => {
        expect(typeof validator.validationSort).toEqual('function');
    })

    test('Should is defined', () => {
        expect(validator.validationSort).toBeDefined();
    });

    test('Test colName = id. Should pass', () => {
        expect(validator.validationSort({ colName: 'id' }).error).toBeUndefined();
    });

    test('Test colName = name. Should pass', () => {
        expect(validator.validationSort({ colName: 'id' }).error).toBeUndefined();
    });

    test('Test colName = price. Should pass', () => {
        expect(validator.validationSort({ colName: 'id' }).error).toBeUndefined();
    });

    test('Test colName = amount. Should pass', () => {
        expect(validator.validationSort({ colName: 'id' }).error).toBeUndefined();
    });

    test('Test colName = branch. Should pass', () => {
        expect(validator.validationSort({ colName: 'id' }).error).toBeUndefined();
    });

    test('Test colName = color. Should pass', () => {
        expect(validator.validationSort({ colName: 'id' }).error).toBeUndefined();
    });
});

describe("Checking method validationFilter", () => {
    test('Should is a function', () => {
        expect(typeof validator.validationFilter).toEqual('function');
    })

    test('Should is defined', () => {
        expect(validator.validationFilter).toBeDefined();
    });
    test('Test fromPrice = 100, toPrice = 200. Should pass', () => {
        expect(validator.validationFilter({ fromPrice: '100', toPrice: '200' }).error).toBeUndefined();
    });
});

describe("Checking method validationOrder", () => {
    test('Should is a function', () => {
        expect(typeof validator.validationOrder).toEqual('function');
    })

    test('Should is defined', () => {
        expect(validator.validationOrder).toBeDefined();
    });
    test('Test productId = 1, amount = 1. Should pass', () => {
        expect(validator.validationOrder({ productId: '1', amount: '1' }).error).toBeUndefined();
    });
});
