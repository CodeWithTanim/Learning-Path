function gcd(a, b) {
    // TODO: Return the greatest common divisor of a and b
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}