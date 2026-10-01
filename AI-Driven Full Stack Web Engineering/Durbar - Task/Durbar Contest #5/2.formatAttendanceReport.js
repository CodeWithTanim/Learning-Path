function formatAttendanceReport(students) {
    // TODO: return an array of formatted attendance reports
    return students.map(({ name, present, total }) => {
        const percentage = Math.round((present * 100) / total);

        let status = "At Risk";
        if (percentage >= 90) {
            status = "Excellent";
        } else if (percentage >= 75) {
            status = "Good";
        }

        return `${name}: ${present}/${total} (${percentage}%) - ${status}`;
    });
}