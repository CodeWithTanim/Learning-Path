function moveZeros(nums) {
    const result = [];
    let zeros = 0;

    for (const n of nums) {
        if (n === 0) zeros++;
        else result.push(n);
    }

    for (let i = 0; i < zeros; i++) result.push(0);

    return result;
}