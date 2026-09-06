function getCngFare (distance, isNight, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2) {
        fare += (distance - 2) * 15;
    };

    const waitingCharge = waitingMinutes * 2;
    fare += waitingCharge;

    if (isNight) {
        fare = fare * 1.2;
    };

    return fare;
}

// Tested Cases:
// console.log(getCngFare(2));                // 50
// console.log(getCngFare(1));                // 50
// console.log(getCngFare(0));                // 50
// console.log(getCngFare(5));                // 95
// console.log(getCngFare(10));               // 170
// console.log(getCngFare(5, false, 10));     // 115
// console.log(getCngFare(5, true));          // 114
// console.log(getCngFare(5, true, 10));      // 138
// console.log(getCngFare(2, true));          // 60
// console.log(getCngFare(2, false, 5));      // 60