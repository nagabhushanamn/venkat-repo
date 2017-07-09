

var products = [
    { name: 'Prod1', price: 100 },
    { name: 'Prod2', price: 100 },
    { name: 'Prod3', price: 400 },
    { name: 'Prod4', price: 700 }
];

let total=products.reduce(function(acc,product){
    console.log(acc);
    console.log(product);
    return acc+product.price;
},0)
console.log(total);