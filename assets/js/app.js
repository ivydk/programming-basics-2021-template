console.log("neeeeeee");

// 14 oktober 
//1. Format objects in an Array
/*Restructure the given values to an object array and assign it to a variable called `drivers`. Try to figure out what keys best to use and how to set up the object.

Then, create a function called `averageLapTime(drivers)` that accepts the object array as a parameter and returns a number that represents the average of all the lap times of all the drivers.*/

let drivers = [{
        driver: 'Max',
        team: 'Redbull',
        lapTimes: [55.99, 63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]
    },
    {
        driver: 'Lewis',
        team: 'Mercedes',
        lapTimes: [55.90, 63.10, 63.1, 53.01, 64.79, 52.80, 52.09, 54.11]
    }
]

/** calculates the average lap time
 * 
 * @param {string} drivers 
 * @returns average, this is the average laptime 
 */
function averageLapTime(drivers) {
    let total = 0;
    let j;
    let i;
    for (j = 0; j < drivers.length; j++) {
        for (i = 0; i < drivers[j].lapTimes.length; i++) {
            total += drivers[j].lapTimes[i]
        }
    }
    average = total / (i * j);
    return average
}

console.log(averageLapTime(drivers));

// 2. Working with objects
const teachers = [{
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        test: "oke"
    },
    {
        name: "Elio",
        profession: "Teacher",
        brand: "Windows",
        test: "ab"
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
        test: "xy"
    },
    {
        name: "Frans",
        profession: "Teacher",
        brand: "Windows",
        test: "dkf"
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        test: "kit"
    }
]

/*Given is the array of objects `teachers`. Now, do the following:
 */

// 2.1. Create a function`logProfessions(teachers)` that accepts the `teachers` array as a parameter and logs `'{name} has a profession as a {profession} and he likes to work on a {brand} computer'` to the console for each object within the teachers array.

/** loggs teachers proffesion plus their brand
 * 
 * @param {string} teachers 
 */
function logProfessions(teachers) {
    let i = 0;

    for (let i = 0; i < teachers.length; i++) {
        console.log(`${teachers[i].name} has a profession as a ${teachers[i].profession} and he likes to work on a ${teachers[i].brand} computer`);
    }
}


logProfessions(teachers);

// 2.2. Create a function `addRandomSalaryInfo(teachers)` that accepts the `teachers` array as a parameter and adds two properties to each existing objects: `hoursPerWeek` and `salary`, where `salary` is the monthly salary. Use `Math.random()` to assign random values in a certain range:
//     1. `hoursPerWeek` between 16 an 40 hours. It would be nice (but not required) if this were increments of 4 hours. So, 16, 20, 24, etc.
//     2. `salary` between €1,000 and €10.000 

/** makes a random monthly salary, (random hours per day * random salary) 
 * 
 * @param {*} teachers 
 * @returns random salary, hoursPerWeek and randomMonthlySalary
 */
function addRandomSalaryInfo(teachers) {
    // Math.floor(Math.random() * (max - min) / inc) * inc + min 
    let hoursPerWeek = Math.floor(Math.random() * (40 - 16) / 4) * 4 + 16;

    // Math.random() * (max - min) + min
    let salary = (Math.random() * (10000 - 1000) + 1000).toFixed(2);

    let randomMonthlySalary = hoursPerWeek * salary;

    return [randomMonthlySalary, salary, hoursPerWeek]
}

let randomSalary = addRandomSalaryInfo();
console.log(`Your random salary is: ${randomSalary[[0]]}`);

// 2.3. Create a function`logSalaryPerHour(teachers)` that accepts the `teachers` array as a parameter and calculates the hourly rate of a teacher and logs it to the console like: *Frans has an hourly rate of €514.26*.
const salary = randomSalary[1];
const hoursPerWeek = randomSalary[2];

/** logs the name of a random teacher and a random hourly rate 
 * 
 * @param {string} teachers 
 */
function logSalaryPerHour(teachers) {
    randomNumber = Math.floor(Math.random() * (teachers.length - 0) / 1) * 1 + 0;

    // ongeveer het uur salaris 
    let hourlyRate = (salary / 4.3 / hoursPerWeek).toFixed(2);
    console.log(`${teachers[randomNumber].name} has an hourly rate of: €${hourlyRate}`);
}

logSalaryPerHour(teachers);


// 2.4. Create a function `normalizeSalaries(teachers, normalizedHourlyRate)` that accepts the `teachers` array as a parameter and updates each salary so its hourly rate should equal the `normalizedHourlyRate` when it is calculated again in the `logSalaryPerHour` function.

// Ik begrijp de opdracht niet

function normalizeSalaries(teachers, normalizedHourlyRate) {
    normalizedHourlyRate = 0;
}

// 3. BubbleSort with object
/*Copy and update your BubbleSort implementation, so it can sort the `teachers` array in the previous assignment. Sort it by name.*/

// het aantal keer dat je de bubble moet doorlopen is arrayLength - 1
// function bubbleSortArray(teachers) {
//     let newArray = [];
//     for (let i = 0; i < teachers.length - 1; i++) {
//         // het aantal keer dat je door de rijen moet is arrayLength - 1 - i (het aantal keer dat je de bubbel al door bent gegaan)
//         for (let j = 0; j < teachers.length - i - 1; j++) {
//             let k = 1;
//             // console.log(teachers[j].name.charAt(0));
//             char1 = teachers[j].name.charCodeAt(0);
//             char2 = teachers[k].name.charCodeAt(0);
//             // console.log(char1);
//             k++;
//             // als het ascii getal van char1 groter is dan het ascii getal van char2, wisselt hij ze om 
//             if (char1 > char2) {
//                 // console.log(`${char1} wisselen voor ${char2}`)
//                 temp = teachers[j].name;
//                 teachers[j].name = teachers[k].name;
//                 teachers[k].name = temp;
//             }
//         }
//     }
//     for (let i = 0; i < teachers.length; i++) {
//         newArray.push(teachers[i].name);
//     }
//     return newArray;
// }

// console.log(bubbleSortArray(teachers));

function bubbleSortArrayExtra(teachers, property) {
    let teller = 0;
    let newArray = [];
    for (let i = 0; i < teachers.length - 1; i++) {
        let k = 1;
        // het aantal keer dat je door de rijen moet is arrayLength - 1 - i (het aantal keer dat je de bubbel al door bent gegaan)
        for (let j = 0; j < teachers.length - i - 1; j++) {
            // console.log(teachers[j].[property].charAt(j));

            char1 = teachers[j][property].charCodeAt(i);
            char2 = teachers[k][property].charCodeAt(i);

            char1b = teachers[j][property].charAt(i);
            char2b = teachers[k][property].charAt(i);

            console.log(`i: ${i}; j: ${j}; k: ${k}; char1: ${char1} / ${char1b} char2: ${char2} / ${char2b} / teller: ${teller}`);

            k++;
            teller++;

            // als het ascii getal van char1 groter is dan het ascii getal van char2, wisselt hij ze om 
            if (char1 > char2) {
                // console.log(`${char1} wisselen voor ${char2}`)
                temp = teachers[j][property];
                teachers[j][property] = teachers[k][property];
                teachers[k][property] = temp;

                newArray[teller] = teachers[k][property]
            } else {
                newArray[teller] = teachers[j][property]
            }
            // console.log(teachers);
        }
    }

    return teachers;
}

console.log(bubbleSortArrayExtra(teachers, 'name'));
console.log(teachers);