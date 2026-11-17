function groupConsecutiveRanges(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b);
    const result = [];

    let i = 0;
    while (i < sorted.length) {
        const start = sorted[i];
        let end = start;
        i++;

        while (i < sorted.length && (sorted[i] === end || sorted[i] === end + 1)) {
            end = sorted[i];
            i++;
        }

        result.push(start === end ? String(start) : `${start}-${end}`);
    }

    return result;
}