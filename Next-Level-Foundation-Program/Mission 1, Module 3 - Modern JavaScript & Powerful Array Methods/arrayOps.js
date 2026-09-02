// foreach, Map

// foreach
let fruits = ['Apple', 'Banana', 'Mango', 'Jackfruit']

let newFruits = fruits.forEach((f, idx) => {
    console.log(`${idx + 1} ----> ${f}`);
    // return `${idx} ----> ${f}`   // for each can't return
})

// console.log(newFruits);

// let mapFruits = fruits.map((f, idx) => {
//     return `${idx + 1} ----> ${f}`;   // map can return
// })

// console.log(mapFruits);


let newFruits2 = fruits.map((f) => f.toLowerCase());
console.log(newFruits2, '\n', fruits);;

let customFruits = fruits.filter((f) => f.length > 5);
console.log(customFruits);
