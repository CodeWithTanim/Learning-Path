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

