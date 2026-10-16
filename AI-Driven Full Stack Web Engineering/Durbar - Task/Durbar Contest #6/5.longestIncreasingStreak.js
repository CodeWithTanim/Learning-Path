function longestIncreasingStreak(nums) {
    // TODO: return the length of the longest contiguous strictly increasing streak
    if (nums.length === 0) return 0;

    let longest = 1;
    let current = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            current++;
        } else {
            current = 1;
        }
        if (current > longest) longest = current;
    }

    return longest;
}