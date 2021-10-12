let height = prompt("What's your height?");
let weight = prompt("What's your weight?");
let bmi;


/** Calculate the BMI
 * 
 * @param {Number} weight 
 * @param {Number} height 
 * @returns the calculated bmi 
 */
function calculateBMI(weight, height) {
    return Math.round(weight / (height * height));
}

/** Gives you the classification
 * 
 * @param {Number} bmi 
 * @returns a string that contains your classification
 */
function getClassification(bmi) {
    let classification;
    if (bmi < 18.5) {
        classification = "Classification: Under weight";
    } else if (bmi < 25) {
        classification = "Classification: Normal weight";
    } else if (bmi < 30) {
        classification = "Classification: Slightly over weight";
    } else {
        classification = "Classification: Obese";
    }
    return classification;
}

/** Gives you your sport 
 * 
 * @param {Number} bmi 
 * @returns a string that contains your sport s
 */
function getSport(bmi) {
    let sport;
    if (bmi < 18.5) {
        sport = "Sport: Start with personal trainer";
    } else if (bmi < 25) {
        sport = "Sport: Start with any programme";
    } else if (bmi < 30) {
        sport = "Sport: Start with cardio training";
    } else {
        sport = "Sport: Sport: Start with personal trainer";
    }
    return sport;
}

console.log(calculateBMI(weight, height));
console.log(getClassification(bmi));
console.log(getSport(bmi));