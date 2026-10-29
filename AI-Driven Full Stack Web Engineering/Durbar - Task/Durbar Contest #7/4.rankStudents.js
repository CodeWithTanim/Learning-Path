function rankStudents(students) {
    const sorted = [...students].sort((a, b) => b.score - a.score);

    let rank = 0;

    return sorted.map((student, i) => {
        if (i === 0 || student.score !== sorted[i - 1].score) {
            rank = i + 1;
        }
        return { ...student, rank };
    });
}