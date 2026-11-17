function findBalancedSplit(nums) {
    let total = 0;
    for (const n of nums) total += n;

    let left = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        left += nums[i];
        if (left === total - left) return i;
    }

    return -1;
}