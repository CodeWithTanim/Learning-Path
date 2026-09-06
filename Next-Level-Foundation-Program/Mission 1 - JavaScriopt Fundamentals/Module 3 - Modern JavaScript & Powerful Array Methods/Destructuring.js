// Destructuring

const student = {
    name: 'Rahim',
    age: 20,
    address: 'Dhaka'
}

// Old
const oldName = student.name;

// New
const {name, age, address} = student;

console.log(name);
console.log(age);
console.log(address);

// nested & name-alias
const student2 = {
    name: 'Fahim',
    age: 20,
    address: {
        city: 'Rajshahi',
        zip: 1212,
    }
}

const {
    name:stuName, 
    address: {city, zip}
} = student2;

console.log(stuName, city);


// Array destructuring

const colors = ['red', 'green', 'blue'];
// const [first, second, third] = colors;
const [, , third] = colors;
// console.log(second);
console.log(third);


const student3 = {
    name: 'Jamil',
    age: 20,
    address: {
        city: 'Rajshahi',
        zip: 1212,
    },
    hobbies: ['Gardening', 'Painting']
}

const {
    name: stuName3, 
    address: {city:cityStd3}, 
    hobbies: [firstHobby]
}= student3;

console.log(firstHobby, cityStd3);