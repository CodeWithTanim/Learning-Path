function repeatedDigitSum(n) {
    // TODO: Implement this function
    while (n >= 10) {
        let sum = 0;
        let str = String(n);
        for (let i = 0; i < str.length; i++) {
            sum += Number(str[i]);
        }
        n = sum;
    }
    return n;
}

// Test Cases
console.log(repeatedDigitSum(9875));   // 2
console.log(repeatedDigitSum(123));    // 6
console.log(repeatedDigitSum(0));      // 0   (single digit already, loop skipped)
console.log(repeatedDigitSum(5));      // 5   (single digit already)
console.log(repeatedDigitSum(10));     // 1   (1+0 = 1)
console.log(repeatedDigitSum(99));     // 9   (9+9=18, 1+8=9)
console.log(repeatedDigitSum(999999)); // 9   (all 9s -> big sum -> eventually 9)
console.log(repeatedDigitSum(1000000));// 1   (only one non-zero digit)
console.log(repeatedDigitSum(38));  