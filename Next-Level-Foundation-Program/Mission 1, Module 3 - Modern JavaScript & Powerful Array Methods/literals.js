//  feel the real power of template literals

// Math Expression:
let price = 500;
let quantity = 3;

console.log(`Total Price: ${price * quantity} taka \nPay the price to get it as your own.`);

// Function Call

function getDiscount(price) {
    return price * 0.1;
}

console.log(`You saved: ${getDiscount(price)} taka \nYour Total Bill is now: ${(price * quantity) - getDiscount(price)} taka only`);



let stock = 10;
console.log(`Status: ${stock > 0 ? 'In Stock ' + stock : 'Out of Stock'}`);

