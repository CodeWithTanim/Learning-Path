function selectBestDiscount(price, offers) {
    let bestOffer = null;
    let lowestPrice = price;

    for (const offer of offers) {
        if (price < offer.minPrice) continue;

        let finalPrice;
        if (offer.type === "flat") {
            finalPrice = price - offer.value;
        } else if (offer.type === "percent") {
            finalPrice = price - price * (offer.value / 100);
        } else {
            continue;
        }

        finalPrice = Math.max(0, finalPrice);

        if (finalPrice < lowestPrice) {
            lowestPrice = finalPrice;
            bestOffer = offer;
        }
    }

    return bestOffer;
}