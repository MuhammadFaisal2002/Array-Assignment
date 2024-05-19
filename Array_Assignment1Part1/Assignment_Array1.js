var products = [
    {
        name: "product 1",
        price: 1400,
        inventory: {
            stock: 2400,
            colorOptions: ["blue", "orange"]
        }
    },
    {
        name: "product 2",
        price: 10400,
        inventory: {
            stock: 300,
            colorOptions: ["black", "purple"]
        }
    },
    {
        name: "product 3",
        price: 8400,
        inventory: {
            stock: 400,
            colorOptions: ["white", "red"]
        }
    }
];
var changeColor = function (product, newColor) {
    if (product.inventory.colorOptions.indexOf(newColor) === -1) {
        product.inventory.colorOptions.push(newColor);
    }
    if (newColor === "red") {
        product.price += product.price * 0.10;
    }
    else if (newColor === "blue") {
        product.price -= product.price * 0.05;
    }
};
var displayProduct = function (product) {
    console.log("Product Name: ".concat(product.name));
    console.log("Product Price: ".concat(product.price));
    console.log("Product Stock: ".concat(product.inventory.stock));
    console.log("Product Color Options: ".concat(product.inventory.colorOptions.join(', ')));
    console.log('---------------------------');
};
var displayAllProducts = function (products) {
    products.forEach(function (product) { return displayProduct(product); });
};
displayAllProducts(products);
changeColor(products[0], "red");
changeColor(products[1], "blue");
displayAllProducts(products);
