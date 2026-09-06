function validateUsername (username) {
    if (username.length < 4) {
        return 'Too Short';
    } else if (username.includes(" ")) {
        return 'No Space Allowed'
    } else if (username.toLowerCase().includes('admin')) {
        return 'Reserved Word';
    } else {
        return 'Available';
    };
};


// Tested Cases:
// console.log(validateUsername("rahim123"));     // Available
// console.log(validateUsername("ab"));           // Too Short
// console.log(validateUsername("a b"));          // Too Short
// console.log(validateUsername("abcd"));         // Available
// console.log(validateUsername("rahim islam"));  // No Space Allowed
// console.log(validateUsername("superadmin99")); // Reserved Word
// console.log(validateUsername("Admin_Rahim"));  // Reserved Word
// console.log(validateUsername("ADMIN"));        // Reserved Word
// console.log(validateUsername("xyz"));          // Too Short
// console.log(validateUsername("admin man"));    // No Space Allowed