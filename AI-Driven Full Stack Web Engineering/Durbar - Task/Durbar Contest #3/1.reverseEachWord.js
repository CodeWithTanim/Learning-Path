function reverseEachWord(str) {
    return str
        .split(" ").map(word => word.split("").reverse().join("")).join(" ");
}

// Test Cases:
console.log(reverseEachWord("Hello World"));       // "olleH dlroW"
console.log(reverseEachWord("JavaScript is fun"));  // "tpircSavaJ si nuf"
console.log(reverseEachWord(""));                   // ""              (empty string)
console.log(reverseEachWord("Hello"));              // "olleH"         (single word)
console.log(reverseEachWord("a b c"));              // "a b c"         (single-char words)
console.log(reverseEachWord("Hello  World"));       // "olleH  dlroW"  (double space preserved)
console.log(reverseEachWord(" Hello World "));      // " olleH dlroW " (leading/trailing space preserved)
console.log(reverseEachWord("Hello, World!"));      // ",olleH !dlroW" (punctuation reversed with word)
console.log(reverseEachWord("racecar"));            // "racecar"       (palindrome, unchanged)
console.log(reverseEachWord("12345 67890"));        // "54321 09876"   (numbers as strings)
console.log(reverseEachWord("a"));                  // "a"             (single character)
console.log(reverseEachWord("Mix3d CAS3 word5"));   // "d3xiM 3SAC 5drow" (mixed case/digits)