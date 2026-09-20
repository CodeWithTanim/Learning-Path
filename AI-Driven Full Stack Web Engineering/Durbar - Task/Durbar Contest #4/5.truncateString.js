function truncateString(str, maxLength) {
    // TODO: Implement this function
    if (str.length <= maxLength) {
        return str;
    }

    if (maxLength <= 3) {
        return "...";
    }

    let cutLength = maxLength - 3;
    let result = "";

    for (let i = 0; i < cutLength; i++) {
        result += str[i];
    }

    return result + "...";
}