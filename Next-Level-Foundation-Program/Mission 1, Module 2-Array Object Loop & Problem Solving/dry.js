// we'll build a order processing system to understand dry and how important a function is.

// dry = do not repeat yourself

function isValidPrice(price) {
    return typeof price === 'number' && price > 0;
}

function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}

function calculatDiscount (price, discountPercent) {
    if (!(isValidPrice(price)) || discountPercent > 50) {
        return 0;
    }
    let discountAmount = (price * discountPercent) / 100;
    return price - discountAmount; 
}

function calculateFinalBill (price, vatPercentage = 15) {
    let vat = (price * vatPercentage) / 100;
    return price + vat;
}

function formatBDT(amount) {
    return `${amount.toFixed(2)} BDT`;
}

function capitalzed (str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function processOrder (user, itemPrice, discountCode) {
    console.log(`---Processing oder for ${user.name}`);
    if (!isValidEmail(user.email)) {
        console.log('Error: Invalid User Email');
        return;
    }

    let currentPrice = itemPrice;

    if (discountCode === 'NLB') {
        currentPrice = calculatDiscount(itemPrice, 20);
        console.log('20% discount Applied');
    }

    let totalBill = calculateFinalBill(currentPrice);
    console.log('Final Amount to pay: ', formatBDT(totalBill));
    console.log('Order Completed Successfully');
}

let user1 = {
    name: 'Samiur',
    email: 'samiur@gmail.com'
};

processOrder(user1, 2000, 'NLB');
