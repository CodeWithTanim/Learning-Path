const total = (price = 10, quantity = 12) => {
    const grandTotal = price * quantity;
    return grandTotal;
};

const spend = total(13)
console.log(spend)


const add = (a, b) => a + b
const sum = add(5, 10)
console.log(sum)


