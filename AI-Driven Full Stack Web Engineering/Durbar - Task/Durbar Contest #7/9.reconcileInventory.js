function reconcileInventory(initialInventory, transactions) {
    const inventory = { ...initialInventory };

    for (const { productId, quantity, type } of transactions) {
        const current = inventory[productId] ?? 0;

        if (type === "in") {
            inventory[productId] = current + quantity;
        } else if (type === "out") {
            inventory[productId] = Math.max(0, current - quantity);
        }
    }

    return inventory;
}