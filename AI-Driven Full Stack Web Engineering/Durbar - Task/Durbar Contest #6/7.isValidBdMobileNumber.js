function isValidBdMobileNumber(phoneNumber) {
    // TODO: Implement the function
    const pattern = /^(?:\+?88)?01[3-9]\d{8}$/;
    return pattern.test(phoneNumber);
}