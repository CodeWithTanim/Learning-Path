function daysBetweenDates(date1, date2) {
    // TODO: Return absolute number of days between date1 and date2
    const toUTC = (s) => {
        const [y, m, d] = s.split("-").map(Number);
        return Date.UTC(y, m - 1, d);
    };

    const diff = Math.abs(toUTC(date1) - toUTC(date2));
    return Math.round(diff / 86400000);
}