function isAnagram(s1, s2) {
    // TODO: Implement this function
    function clean(str) {
        let result = '';
        str = str.toLowerCase();
        for (let i = 0; i < str.length; i++) {
            let ch = str[i];
            if (ch >= 'a' && ch <= 'z') {
                result += ch;
            }
        }
        return result.split('').sort().join('');
    }

    return clean(s1) === clean(s2);
}

// Test cases
console.log(isAnagram('listen', 'silent'));          // Output: true
console.log(isAnagram('rail safety', 'fairy tales')); // Output: true
console.log(isAnagram('hello', 'world'));          // Output: false
console.log(isAnagram('dormitory', 'dirty room'));   // Output: true
console.log(isAnagram('The eyes', 'They see'));    // Output: true
console.log(isAnagram('A gentleman', 'Elegant man')); // Output: true
console.log(isAnagram('Dormitory', 'dirtyroom'));  // Output: true (case-insensitive)
console.log(isAnagram('apple', 'apply'));          // Output: false
console.log(isAnagram('', ''));                  // Output: true (empty strings are anagrams)
console.log(isAnagram('a', 'a'));                  // Output: true
console.log(isAnagram('a', 'b'));                  // Output: false