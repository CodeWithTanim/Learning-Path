function calculateCartTotal(items, taxRate) {
    let subtotal = 0;

    for (const item of items) {
        subtotal += item.price * item.quantity * (1 - item.discount / 100);
    }

    const total = subtotal * (1 + taxRate / 100);

    return Math.round((total + Number.EPSILON) * 100) / 100;
}