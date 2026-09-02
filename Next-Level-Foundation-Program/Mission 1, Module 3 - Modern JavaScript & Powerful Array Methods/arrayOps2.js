let studnet = [
    {name: 'Rahim', marks: 85},
    {name: 'karim', marks: 45},
    {name: 'Fahim', marks: 76},
]

let fruits = ['Apple', 'Banana', 'Mango', 'Jackfruit']

// find()

let customFruit = fruits.find((f) => f.length > 5);
console.log(customFruit);

// includes()
let findFrt = fruits.includes('Mango')
console.log(findFrt);

// some
let studentCheck = studnet.some((s) => s.marks > 80)
console.log(studentCheck);
let studentCheck2 = studnet.every((s) => s.marks > 40)
console.log(studentCheck2);