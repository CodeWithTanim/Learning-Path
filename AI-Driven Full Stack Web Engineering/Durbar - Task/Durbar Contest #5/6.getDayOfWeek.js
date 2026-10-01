function getDayOfWeek(year, month, day) {
    // TODO: return the name of the weekday
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(Date.UTC(year, month - 1, day));

    return days[date.getUTCDay()];
}