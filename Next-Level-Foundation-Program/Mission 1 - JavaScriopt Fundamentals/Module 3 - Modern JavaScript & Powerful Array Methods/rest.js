// rest

// function
function add(...numbers) {
    console.log(numbers);
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(add(1, 2, 3, 4, 5));

// Object
const obj = {
    name: 'Abul',
    age: 25,
    address: 'Dhaka',
    occupation: 'Developer'
}

const {name, ...remaining} = obj;
console.log(remaining);


// Array
const arr = [1, 2, 7, 300, 400];

const [, , , ...rest] = arr;
console.log(rest);



function something(one, ...remaining) {
    console.log(one, remaining);
}

console.log(something('first', 1, 2, 3, 4, 5, 6, 7, 8, 9));