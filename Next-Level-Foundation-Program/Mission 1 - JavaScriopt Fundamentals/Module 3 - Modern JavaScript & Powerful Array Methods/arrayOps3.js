let products = [
    {title: 'Mouse', price: 500, inStock: true},
    {title: 'Keyboard', price: 1200, inStock: false},
    {title: 'Monitor', price: 8000, inStock: true},
    {title: 'Headphone', price: 1500, inStock: true},
];

let totalPrice = products.reduce((sum, current) => {
    return (sum += current.price)
}, 0)
console.log(totalPrice);

// let sortedNum = [10, 20, 100, 50, 99, 520].sort((a, b) => a - b);
// let sortedNum = [10, 20, 100, 50, 99, 520].sort((a, b) => b - a);
// console.log(sortedNum);

let sorted = products.sort((a,b) => a.price - b.price);
console.log(sorted);

let estPrice = products.filter((p) => p.inStock === true).reduce((sum, current) => {
    return (sum += current.price)
}, 0);

console.log(estPrice);
