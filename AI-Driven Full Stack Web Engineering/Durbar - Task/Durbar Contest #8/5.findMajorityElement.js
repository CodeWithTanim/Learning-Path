function findMajorityElement(nums) {
    let candidate = null;
    let count = 0;

    for (const n of nums) {
        if (count === 0) candidate = n;
        count += n === candidate ? 1 : -1;
    }

    let freq = 0;
    for (const n of nums) {
        if (n === candidate) freq++;
    }

    return freq > nums.length / 2 ? candidate : null;
}