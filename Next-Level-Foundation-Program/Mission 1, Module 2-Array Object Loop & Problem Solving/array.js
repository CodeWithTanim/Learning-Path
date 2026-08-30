// let name = 'Samiur'

// let name = ['Samiur', 'Tanim', 'Rohim', 'Karim', 'Jodu', 2, true]

let name = ['Samiur', 'Tanim', 'Rohim', 'Karim', 'Jodu']
console.log(name);
console.log(name.length);

console.log(name[4])


let number = [100, 520, 652, 545, 211]

console.log(number[0])
console.log(number[1])
console.log(number[2])
console.log(number[3])
console.log(number[4])
// console.log(number[5])   // undefined


// For add in last
name.push('Modu')
console.log(name)

name.push('Kodu')
console.log(name)

// For remove in last
name.pop()
console.log(name)

name.pop()
console.log(name)

// For add in first
name.unshift('Jaber')
console.log(name)

// For remove in first
name.shift()
console.log(name)

// for add in the middle
// no remove just add
// name.splice(2, 0, 'Jasim')
console.log(name)

// for remove in the middle
name.splice(2, 1, 'Badol')
console.log(name)