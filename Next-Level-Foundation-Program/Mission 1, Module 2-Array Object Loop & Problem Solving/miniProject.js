// mini project

let students = [
    {id: 101, name: 'Rahim', age: 20, department: 'CSE'},
    {id: 102, name: 'Karim', age: 22, department: 'EEE'}
]

function addStudents (name, age, dept) {
    let newID = students.length > 0 ? students[students.length - 1].id + 1: 101;
    let newStudent = {
        id: newID,
        name,
        age,
        department: dept,
    };
    students.push(newStudent);
    console.log('student added successfully');

}

function getAll () {
    for (const student of students) {
        console.log(student);
    }
}


addStudents('Jodu', 21, 'Ai');
getAll();
// console.log(students);

function fomdStudent (id) {
    let foundStudent = null;
    for (let student of students) {
        if (student.id == id) {
            foundStudent = student;
            break;
        }

    }
    if (foundStudent) {
        console.log('Found Students: ', foundStudent);
    } else {
        console.log('404 Not Found');
    };
}

fomdStudent(102);
fomdStudent(109);


function deleteStudent (id) {
    let targetStudent = -1;

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            targetStudent = i;
        };
    }
    if (targetStudent != -1) {
        let deletedStudent = students.splice(targetStudent, 1);
        console.log(`deleted ${deletedStudent[0].name} id: ${targetStudent} deleted`);
    } else {
        console.log('404 Not Found');
    }
}
deleteStudent(101);
getAll()