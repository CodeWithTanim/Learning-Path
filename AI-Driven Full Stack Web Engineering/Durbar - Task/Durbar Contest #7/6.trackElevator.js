function trackElevator(startFloor, minFloor, maxFloor, commands) {
    let floor = startFloor;

    for (const command of commands) {
        if (command === "UP") {
            floor = Math.min(maxFloor, floor + 1);
        } else if (command === "DOWN") {
            floor = Math.max(minFloor, floor - 1);
        }
    }

    return floor;
}