// Question 1

function describeValue(value) {
    const type = typeof value;
    const description = value ? 'truthy' : 'falsy';
    return `${type} | ${description}`;
}



// Tested Cases: 
// console.log(describeValue("hello"));      // string | truthy
// console.log(describeValue(""));           // string | falsy
// console.log(describeValue(25));           // number | truthy
// console.log(describeValue(0));            // number | falsy
// console.log(describeValue(true));         // boolean | truthy
// console.log(describeValue(false));        // boolean | falsy
// console.log(describeValue(null));         // object | falsy
// console.log(describeValue(undefined));    // undefined | falsy
// console.log(describeValue("0"));          // string | truthy
// console.log(describeValue(NaN));          // number | falsy
// console.log(describeValue(-1));           // number | truthy
// console.log(describeValue({}));           // object | truthy
// console.log(describeValue([]));           // object | truthy



// Question 2

function getDayType (day) {
    const normalizedDay = day.toLocaleLowerCase();

    switch (normalizedDay) {
        case 'friday':
        case 'saturday':
            return 'Weekend';
        case 'sunday':
        case 'monday':
        case 'tuesday':
        case 'thursday':
        case 'wednesday':
            return 'Working Day';
        default:
            return 'Invalid Day';
    };
};


// Tested Cases:
// console.log(getDayType("Friday"));        // Weekend
// console.log(getDayType("Saturday"));      // Weekend
// console.log(getDayType("friday"));        // Weekend
// console.log(getDayType("SATURDAY"));      // Weekend
// console.log(getDayType("MONDAY"));        // Working Day
// console.log(getDayType("Sunday"));        // Working Day
// console.log(getDayType("tuesday"));       // Working Day
// console.log(getDayType("Wednesday"));     // Working Day
// console.log(getDayType("THURSDAY"));      // Working Day
// console.log(getDayType("Bandarban"));     // Invalid Day
// console.log(getDayType(""));              // Invalid Day
// console.log(getDayType("Frday"));         // Invalid Day



// Question 3

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



// Question 4

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




// Question 5

const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return 'Won';
    };

    if (ballsLeft <= 0) {
        return 'Lost';
    };

    const requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict = '';


    if (requiredRate <= 6) {
        verdict = 'Comfortable';
    } else if (requiredRate <= 12) {
        verdict = 'Tough';
    } else {
        verdict = 'Almost Impossible';
    };

    return `'Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`
    
};



// --- Tested Cases:
// console.log(getChaseVerdict(200, 200, 12)); // Won
// console.log(getChaseVerdict(200, 210, 12)); // Won
// console.log(getChaseVerdict(200, 190, 0));  // Lost
// console.log(getChaseVerdict(100, 90, 12));  // Need 10 runs in 12 balls | Comfortable
// console.log(getChaseVerdict(100, 80, 12));  // Need 20 runs in 12 balls | Tough
// console.log(getChaseVerdict(100, 70, 12));  // Need 30 runs in 12 balls | Almost Impossible
// console.log(getChaseVerdict(150, 149, 1));  // Need 1 runs in 1 balls | Comfortable
// console.log(getChaseVerdict(60, 48, 12));   // Need 12 runs in 12 balls | Comfortable
// console.log(getChaseVerdict(72, 48, 12));   // Need 24 runs in 12 balls | Tough
// console.log(getChaseVerdict(100, 0, 6));    // Need 100 runs in 6 balls | Almost Impossible

