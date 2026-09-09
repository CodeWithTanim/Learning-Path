function convertTemperature(value, unit) {
    // TODO: Implement the temperature conversion

    let result;

    if (unit.toLowerCase() === 'c') {
        result = (value * 9 / 5) + 32;
    } else if (unit.toLowerCase() === 'f') {
        result = (value - 32) * 5 / 9;
    }

    return Math.round(result * 100) / 100;
}


// Test Cases:

console.log(convertTemperature(0, 'C'));     // 32
console.log(convertTemperature(32, 'F'));    // 0
console.log(convertTemperature(100, 'C'));   // 212        (boiling point)
console.log(convertTemperature(212, 'F'));   // 100        (boiling point, reverse)
console.log(convertTemperature(-40, 'C'));   // -40        (C and F meet at -40)
console.log(convertTemperature(-40, 'F'));   // -40        (reverse of above)
console.log(convertTemperature(37, 'C'));    // 98.6       (body temp, decimal result)
console.log(convertTemperature(98.6, 'F'));  // 37         (reverse of above)
console.log(convertTemperature(0, 'F'));     // -17.78     (rounding to 2 decimals)
console.log(convertTemperature(21, 'C'));    // 69.8       (room temp)
console.log(convertTemperature(-17.777, 'C'));// -0.0006... rounds to -0 edge, watch this one
console.log(convertTemperature(1.005, 'C')); // tests floating-point rounding precision