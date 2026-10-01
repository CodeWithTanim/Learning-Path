function swapKeysAndValues(obj) {
    // Your code here
    const result = {};

    for (const key of Object.keys(obj)) {
        result[obj[key]] = key;
    }

    return result;
}