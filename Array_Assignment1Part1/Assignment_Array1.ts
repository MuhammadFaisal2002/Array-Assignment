
type product = {
    name: string,
    price: number,
    inventory: {
        stock: number,
        colorOptions: string[]
    },
}

let products: product[] = [
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
]

let changeColor = (product: product, newColor: string): void => { 
    if (product.inventory.colorOptions.indexOf(newColor) === -1) { 
        product.inventory.colorOptions.push(newColor);
    }
    if (newColor === "red") {
        product.price += product.price * 0.10; 
    } else if (newColor === "blue") {
        product.price -= product.price * 0.05; 
    }
}

let displayProduct = (product: product): void => { 
    console.log(`Product Name: ${product.name}`); 
    console.log(`Product Price: ${product.price}`);
    console.log(`Product Stock: ${product.inventory.stock}`);
    console.log(`Product Color Options: ${product.inventory.colorOptions.join(', ')}`); 
    console.log('---------------------------');
}

let displayAllProducts = (products: product[]): void => { 
    products.forEach(product => displayProduct(product)); 
}

displayAllProducts(products); 

changeColor(products[0], "red"); 
changeColor(products[1], "blue"); 

displayAllProducts(products); 
