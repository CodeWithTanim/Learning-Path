// Spread Operator
// let newArr = [...oldArr]
// let newObj = {...oldObj}

let cart = ['fruits', 'rice'];

// cart.push('egg')
let cart2 = [...cart, 'egg']

console.log(cart);
console.log(cart2);


const personalInfo = {
    name: 'Rahim',
    age: 24,

}

const contactInfo = {
    email: 'rahim@rahim.com',
    phone: '01755000000',
}

const fullProfile = {
    ...personalInfo, 
    ...contactInfo,
    zip: '6000'
};
console.log(fullProfile);