
const weight = process.argv[2];
const height = process.argv[3];
console.log(weight, height);

function calculateBMI (weight, height) {
    const bmi = weight / (height * height);
    
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    return { bmi: bmi.toFixed(2), category };
}

const result = calculateBMI(weight, height);
console.log(`BMI: ${result.bmi}`);
console.log(`Category (WHO): ${result.category}`);

