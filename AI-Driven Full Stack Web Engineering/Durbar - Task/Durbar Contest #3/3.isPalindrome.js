function isPalindrome(str) {
    // TODO: Implement this function
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

// Test Cases
console.log(isPalindrome("madam"));                                // true
console.log(isPalindrome("A man, a plan, a canal: Panama"));       // true
console.log(isPalindrome("hello"));                                // false
console.log(isPalindrome(""));                                     // true  (empty string, vacuously true)
console.log(isPalindrome("a"));                                    // true  (single character)
console.log(isPalindrome("  "));                                   // true  (only spaces -> cleaned to "")
console.log(isPalindrome("!!!"));                                  // true  (only punctuation -> cleaned to "")
console.log(isPalindrome("12321"));                                // true  (numeric palindrome)
console.log(isPalindrome("123abccba321"));                         // true  (mixed alphanumeric palindrome)
console.log(isPalindrome("Was it a car or a cat I saw?"));         // true  (classic mixed-case/punctuation palindrome)
console.log(isPalindrome("No 'x' in Nixon"));                      // true  (quotes + case handling)
console.log(isPalindrome("Not a palindrome"));                     // false
console.log(isPalindrome("ab"));                                   // false (short non-palindrome)
console.log(isPalindrome("RaceCar"));                               // true  (case-insensitivity check)