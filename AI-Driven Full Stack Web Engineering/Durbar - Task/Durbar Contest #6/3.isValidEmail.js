function isValidEmail(email) {
    // TODO: Return true if email matches the specified format, false otherwise
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}