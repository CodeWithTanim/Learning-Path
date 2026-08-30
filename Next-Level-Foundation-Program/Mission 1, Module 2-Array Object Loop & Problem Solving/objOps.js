let students = {
    name: 'Rahim',
    id: 102,
    marks: {
        bangla: 75,
        english: 82,
        math: 90
    },
};

let totalMarks = 0;

let totalSubject = 0;

for (const subject in students.marks) {
    totalMarks += students.marks[subject];
    totalSubject++;
}
let average = (totalMarks / totalSubject).toFixed(2);
console.log(totalMarks, totalSubject);
console.log(average);

if (average >= 80) {
    console.log('Passwed with distinction. got', average, '%');
} else {
    console.log('Failed Korece polalikhe korte hobe');
}



// task: how many ite and total how much cost
let cart = [
    { name: 'Shirt', price: 1200, quantity: 2 },
    { name: 'Pants', price: 1800, quantity: 1 },
    { name: 'Socks', price: 150, quantity: 3 },
]

let totalCost = 0;
let toalItem = 0;
for (const item of cart) {
    console.log(item);
    totalCost += item.price * item.quantity;
    toalItem += item.quantity;
}
console.log('Totall Item: ',toalItem,'Total Cost: ', totalCost);