function findFreeTime(bookedIntervals, workingHours) {
    const [workStart, workEnd] = workingHours;
    const sorted = [...bookedIntervals].sort((a, b) => a[0] - b[0]);

    const free = [];
    let cursor = workStart;

    for (const [start, end] of sorted) {
        if (cursor >= workEnd) break;

        if (start > cursor) {
            free.push([cursor, Math.min(start, workEnd)]);
        }

        cursor = Math.max(cursor, end);
    }

    if (cursor < workEnd) {
        free.push([cursor, workEnd]);
    }

    return free;
}