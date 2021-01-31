const productService = require('../product/product.service');

//Create list mock Products
const products = [{
    "id": "1",
    "name": "Macbook",
    "price": "1000",
    "amount": "10000",
    "branch": "Apple",
    "color": "Grey"
},
{
    id: "2",
    name: "Macbook",
    price: "1000",
    amount: "90000",
    branch: "Apple",
    color: "White"
},
{
    id: "3",
    name: "Iphone 12",
    price: "1100",
    amount: "2500",
    branch: "Apple",
    color: "Red"
},
{
    id: "4",
    name: "Samsung Fold",
    price: "900",
    amount: "100000",
    branch: "Samsung",
    color: "White"
},
{
    id: "5",
    name: "Nokia 8011",
    price: "100",
    amount: "60000",
    branch: "Nokia",
    color: "White"
}];

//Init mock data for products.
const initData = async () => {
    //Clear all products
    await productService.deleteAllProducts();
    console.log("Clear all products");

    // //Insert products.
    const productList = products.map(product => productService.saveAProduct(product));
    Promise.all(productList)
        .then((data) => {
            console.log("Init data for products successfully");
        })
        .catch((err) => {
            console.log("Init data for products error", err);
        });
}

module.exports = initData;
