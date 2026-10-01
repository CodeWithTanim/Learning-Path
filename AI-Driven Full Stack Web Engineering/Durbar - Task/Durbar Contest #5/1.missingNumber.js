function missingNumber(nums) {
    // TODO
    const n = nums.length;
    const expectedSum = (n * (n+1)) / 2;

    let actualSum = 0;
    for (const num of nums) {
        actualSum += num;
    }
    return expectedSum - actualSum;
}