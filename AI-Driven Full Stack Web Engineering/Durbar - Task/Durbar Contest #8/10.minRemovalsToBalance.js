function minRemovalsToBalance(s) {
    let open = 0;
    let removals = 0;

    for (const ch of s) {
        if (ch === "(") {
            open++;
        } else if (open > 0) {
            open--;
        } else {
            removals++;
        }
    }

    return removals + open;
}