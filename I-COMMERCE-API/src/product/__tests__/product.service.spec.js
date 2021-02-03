const productService = require('../product.service');
const productRepository = require('../product.repository');

jest.mock('../product.repository');

describe('product.service', () => {
    afterEach(async () => {
        expect.hasAssertions();
        jest.clearAllMocks();
    });

    describe("saveAProduct", () => {
        test('should save a product', async () => {
            const productData = {
                id: 1000,
                name: "Space ship",
                price: 999999,
                amount: 2,
                branch: "Tesla",
                color: "white"
            };
            productRepository.save.mockResolvedValueOnce(productData);
            const result = await productService.saveAProduct(productData);
            expect(result.id).toEqual(productData.id);
            expect(result).toEqual(productData);
            expect(productRepository.save).toHaveBeenCalledWith(productData);
        });
    });

    describe("getAllProducts", () => {
        test('should get all products', async () => {
            const productData = [{
                id: 1000,
                name: "Space ship",
                price: 999999,
                amount: 2,
                branch: "Tesla",
                color: "white"
            }];
            productRepository.find.mockResolvedValueOnce(productData);
            const result = await productService.getAllProducts();
            expect(result).toEqual(productData);
            expect(productRepository.find).toHaveBeenCalledWith();
        });
    });

    describe("getAProduct", () => {
        test('should find a product', async () => {
            const productId = 1001;
            const productData = {
                id: 1001,
                name: "Macbook",
                price: 1000,
                amount: 960,
                branch: "Apple",
                color: "grey"
            };
            productRepository.findOne.mockResolvedValueOnce(productData);
            const result = await productService.getAProduct(productId);
            expect(result).toEqual(productData);
            expect(productRepository.findOne).toHaveBeenCalledWith(productId);
        });
    });

    describe("searchProducts", () => {
        test('should find products', async () => {
            const productData = [{
                id: 1001,
                name: "Macbook",
                price: 1000,
                amount: 960,
                branch: "Apple",
                color: "grey"
            }];
            productRepository.findProducts.mockResolvedValueOnce(productData);
            const result = await productService.searchProducts("grey");
            expect(result).toEqual(productData);
            expect(productRepository.findProducts).toHaveBeenCalledWith("grey");
        });
    });

    describe("sortProducts", () => {
        test('should sort products', async () => {
            const productData = [
                {
                    isDeleted: false,
                    id: 5,
                    name: "Nokia 8011",
                    price: 100,
                    amount: 60000,
                    branch: "Nokia",
                    color: "White",
                    createdAt: "2021-02-02T18:16:21.587Z",
                    modifiedAt: "2021-02-02T18:16:21.587Z",
                },
                {
                    isDeleted: false,
                    id: 4,
                    name: "Samsung Fold",
                    price: 900,
                    amount: 100000,
                    branch: "Samsung",
                    color: "White",
                    createdAt: "2021-02-02T18:16:21.587Z",
                    modifiedAt: "2021-02-02T18:16:21.587Z"
                }];
            productRepository.sortProducts.mockResolvedValueOnce(productData);
            const result = await productService.sortProducts('price', 'asc');
            expect(result).toEqual(productData);
            expect(productRepository.sortProducts).toHaveBeenCalledWith('price', 'asc');
        });
    });

    describe("filterProducts", () => {
        test('should filter products', async () => {
            const productData = [
                {
                    isDeleted: false,
                    id: 4,
                    name: "Samsung Fold",
                    price: 900,
                    amount: 100000,
                    branch: "Samsung",
                    color: "White",
                    createdAt: "2021-02-02T18:21:47.088Z",
                    modifiedAt: "2021-02-02T18:21:47.088Z",
                },
                {
                    isDeleted: false,
                    id: 5,
                    name: "Nokia 8011",
                    price: 100,
                    amount: 60000,
                    branch: "Nokia",
                    color: "White",
                    createdAt: "2021-02-02T18:21:47.088Z",
                    modifiedAt: "2021-02-02T18:21:47.088Z",
                }
            ]
            productRepository.filterProducts.mockResolvedValueOnce(productData);
            const result = await productService.filterProducts(100, 900);
            expect(result).toEqual(productData);
            expect(productRepository.filterProducts).toHaveBeenCalledWith(100, 900);
        });
    });

    describe("updateProduct", () => {
        test('should update product', async () => {
            const productData = {
                id: 1001,
                name: "Macbook",
                price: 1000,
                amount: 960,
                branch: "Apple",
                color: "grey"
            };

            productRepository.updateOne.mockResolvedValueOnce(productData);
            const result = await productService.updateProduct(productData);
            expect(result).toEqual(productData);
            expect(productRepository.updateOne).toHaveBeenCalledWith(productData);
        });
    });

    describe("recheckOrderProduct", () => {
        test('should get a product', async () => {
            const productData = {
                id: 1001,
                name: "Macbook",
                price: 1000,
                amount: 960,
                branch: "Apple",
                color: "grey"
            };
            productRepository.findOne.mockResolvedValueOnce(productData);
            const result = await productService.recheckOrderProduct(1001, 100);
            expect(result).toEqual(productData);
            expect(productRepository.findOne).toHaveBeenCalledWith(1001);
        });
    });

    describe("deleteAllProducts", () => {
        test('should delete all product', async () => {
            const productData = [];
            productRepository.deleteMany.mockResolvedValueOnce(productData);
            const result = await productService.deleteAllProducts();
            expect(result).toEqual(productData);
            expect(productRepository.deleteMany).toHaveBeenCalledWith();
        });
    });
});