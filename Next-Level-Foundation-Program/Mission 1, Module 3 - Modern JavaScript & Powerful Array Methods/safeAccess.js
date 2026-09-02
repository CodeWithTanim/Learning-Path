let user1 = {
    name: 'Rahim',
    address: {
        city: 'Dhaka',
    },
};

let user2 = {
    name: 'Kadim',
    // No Address
};

// Optional Chaining ------> ?
console.log(user1.address.city);
console.log(user2?.address?.city);

// Nullish Coalescing ------> ??
console.log(user2?.address?.city ?? 'Rajshahi');
console.log(user1?.address?.city ?? 'Rajshahi');

