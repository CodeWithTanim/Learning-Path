let user = {
    name: 'Samiur',
    age: 23,
    address: {
        city: 'Bogura',
        area: 'Jamil Naga',
        zipcode: 5800,
    }
}

// console.log(user['address']['zipcode'])
// console.log(user.address.zipcode)

let entry = Object.entries(user)
// console.log(entry[0][1])

let students = [
    {
        name: 'Rahim',
        id: 101,
    },
    {
        name: 'Karim',
        id: 102,
    },
    {
        name: 'Sabir',
        id: 103,
        address: {
            area: 'Badda',
            thana: 'Vatara',
            lane: 'Embassy Lane',
            option: ['vitor', 'dhaka chaka']
        },
    },

]

// console.log(students[2])
// console.log(students[2].name)
// console.log(students[2].address.lane)
// console.log(students[2].address.option[1])
students[2].address.option[1] = 'Premium'
console.log(students[2].address.option[1])

