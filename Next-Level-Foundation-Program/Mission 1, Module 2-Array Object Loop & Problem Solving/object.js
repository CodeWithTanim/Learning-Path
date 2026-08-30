let user = {
    name: 'Samiur',
    age: 23,
    address: 'Pabna'
}

// Dot Notation
// console.log(user.name);
// console.log(user.age);
// console.log(user.address);

// Bracket Notation
// console.log(user['name'])
// console.log(user['age'])
// console.log(user['address'])

delete user.address
// console.log(user)
user.address = 'Bogura'
// console.log(user)
user.address = {
    city: 'Bogura',
    area: 'Jamil Naga'
}
// console.log(user)


// console.log(user.keys)
// console.log(user.entries())

console.log(Object.entries(user));
console.log(Object.keys(user));
console.log(Object.values(user))

