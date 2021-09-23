console.log('JavaScript is working!');

// EXERCISE (SELF PACED)
// 1. Declaring with variables
let firstName = "Ivy";
let lastName = "Dekker";
let age = "18";

console.log(`Hello, I am ${firstName} ${lastName} and I am ${age} years old`)

// 2. Calculate
let priceOfAnApple = 0.59;
let numberOfApples = 200.0;
let price = priceOfAnApple * numberOfApples;
console.log(numberOfApples + " apples will cost €" + price)

// 3.  Pythagorean Theorem
const a = 5;
const b = 6;
let c;

c = (a * a) + (b * b)

console.log(c)

// 4. Strings
let sentence = "Please visit the HZ University of Applied Sciences";
sentence = sentence.replace("Applied", "Mad");
console.log(sentence);


// ASSIGNMENTS (FOR FEEDBACK)
// 1. JavaScript expression
let number = 10;

if (number % 2 == 0) {
    console.log("This is an even number");
} else {
    console.log("This isn't an even number");
}

// 2. String expression
let sentence2 = "Programming is not so cool";
sentence2 = sentence2.replace(" not", "");
console.log(sentence2);