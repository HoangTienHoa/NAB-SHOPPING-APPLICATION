const validator = require('../product.validator');
describe("product.validator", () => {
    describe("validationSort", () => {
        test('should is a function', () => {
            expect(typeof validator.validationSort).toEqual('function');
        })

        test('should is defined', () => {
            expect(validator.validationSort).toBeDefined();
        });

        test('test colName = id. Should pass', () => {
            expect(validator.validationSort({ colName: 'id' }).error).toBeUndefined();
        });

        test('test colName = name. Should pass', () => {
            expect(validator.validationSort({ colName: 'id' }).error).toBeUndefined();
        });

        test('test colName = price. Should pass', () => {
            expect(validator.validationSort({ colName: 'id' }).error).toBeUndefined();
        });

        test('test colName = amount. Should pass', () => {
            expect(validator.validationSort({ colName: 'id' }).error).toBeUndefined();
        });

        test('test colName = branch. Should pass', () => {
            expect(validator.validationSort({ colName: 'id' }).error).toBeUndefined();
        });

        test('test colName = color. Should pass', () => {
            expect(validator.validationSort({ colName: 'id' }).error).toBeUndefined();
        });
    });

    describe("validationFilter", () => {
        test('should is a function', () => {
            expect(typeof validator.validationFilter).toEqual('function');
        })

        test('should is defined', () => {
            expect(validator.validationFilter).toBeDefined();
        });
        test('test fromPrice = 100, toPrice = 200. Should pass', () => {
            expect(validator.validationFilter({ fromPrice: '100', toPrice: '200' }).error).toBeUndefined();
        });
    });

    describe("validationOrder", () => {
        test('should is a function', () => {
            expect(typeof validator.validationOrder).toEqual('function');
        })

        test('should is defined', () => {
            expect(validator.validationOrder).toBeDefined();
        });
        test('test productId = 1, amount = 1. Should pass', () => {
            expect(validator.validationOrder({ productId: '1', amount: '1' }).error).toBeUndefined();
        });
    });
});