function classifyPassword(password) {
    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;
    let hasSpecial = false;

    const specialChars = "!@#$%^&*";

    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= 'A' && char <= 'Z') hasUpper = true;
        else if (char >= 'a' && char <= 'z') hasLower = true;
        else if (char >= '0' && char <= '9') hasDigit = true;
        else if (specialChars.includes(char)) hasSpecial = true;
    }

    let typeCount = 0;
    if (hasUpper) typeCount++;
    if (hasLower) typeCount++;
    if (hasDigit) typeCount++;
    if (hasSpecial) typeCount++;

    if (password.length >= 8 && hasUpper && hasLower && hasDigit && hasSpecial) {
        return "Strong";
    } else if (password.length >= 6 && typeCount >= 2) {
        return "Medium";
    } else {
        return "Weak";
    }
}

// Test Cases
console.log(classifyPassword("Password1!"));   // "Strong"
console.log(classifyPassword("pass123"));      // "Medium"
console.log(classifyPassword(""));              // "Weak"    (empty string)
console.log(classifyPassword("a"));             // "Weak"    (too short, only 1 type)
console.log(classifyPassword("aaaaaa"));        // "Weak"    (length 6, but only 1 type -> fails Medium's "2 types")
console.log(classifyPassword("aaaaaaA"));       // "Medium"  (length 7, 2 types: lower+upper)
console.log(classifyPassword("Aa1!"));          // "Weak"    (all 4 types but length < 6)
console.log(classifyPassword("Aa1!Aa1"));       // "Medium"  (length 7, 4 types, but length < 8 -> caps at Medium)
console.log(classifyPassword("Aa1!Aa1!"));      // "Strong"  (length 8, all 4 types)
console.log(classifyPassword("PASSWORD"));      // "Weak"    (length 8, only 1 type: upper)
console.log(classifyPassword("PASSWORD1"));     // "Medium"  (length 9, 2 types: upper+digit)
console.log(classifyPassword("password123"));   // "Medium"  (length 11, 2 types: lower+digit)
console.log(classifyPassword("!!!!!!!!"));      // "Weak"    (length 8, only 1 type: special)
console.log(classifyPassword("Ab1!Ab1!Ab1!"));  // "Strong"  (longer, all 4 types)
console.log(classifyPassword("Ab#de1"));        // "Medium"  (length 6 exactly, boundary check, 4 types but length<8)