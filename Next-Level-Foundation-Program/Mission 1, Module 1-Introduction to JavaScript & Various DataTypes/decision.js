// if else, switch case, ternary

let age = 5

// if (age >= 18) {
//     console.log("Voter")
// } else {
//     console.log("Not a voter")
// }


let marks = 80

// if (marks >= 80 || marks >= 90) {
//     console.log('A+')
// } else if (marks >= 70) {
//     console.log("A")
// } else if (marks >= 60) {
//     console.log("A-")
// } else {
//     console.log("Need Improvement")
// }

switch (true) {
    case marks >= 80:
        console.log('A+')
        break;
    case marks >= 70:
        console.log('A')
        break;
    case marks >= 60:
        console.log('A-')
        break;
    default:
        console.log("Need Improvement")
        break;
}

// ternery condition ? true : false

// let voter = age >= 18 ? 'Voter' : "Not Voter"
// console.log(voter)  

age >= 18 ? console.log('Voter') : console.log('Not Voter')

