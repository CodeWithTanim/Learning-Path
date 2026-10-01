function groupStudentsByGradeBand(students) {
    // TODO: Implement this function
    return students.reduce(
        (groups, student) => {
            if (student.marks >= 80) {
                groups.A.push(student);
            } else if (student.marks >= 70) {
                groups.B.push(student);
            } else if (student.marks >= 60) {
                groups.C.push(student);
            } else {
                groups.F.push(student);
            }

            return groups;
        },

        { A: [], B: [], C: [], F: [] }

    );
}