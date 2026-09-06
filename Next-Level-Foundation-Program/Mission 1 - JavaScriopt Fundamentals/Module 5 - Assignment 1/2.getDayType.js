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