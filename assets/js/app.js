// Assignments (for feedback)
// 1. Calculate number
/* Given is this table. 

- Using JavaScript, calculate the average of all the grades from the different courses.
- Write the answer as a new row of the table using JavaScript.

Hint: you can change the HTML if you think that is a smart thing to do. */

const grade1 = parseFloat(document.getElementById('grade1').textContent);
const grade2 = parseFloat(document.getElementById('grade2').textContent);
const grade3 = parseFloat(document.getElementById('grade3').textContent);
const grade4 = parseFloat(document.getElementById('grade4').textContent);
const average = parseFloat((grade1 + grade2 + grade3 + grade4) / 4);

console.log(average)

// new row 
const table = document.getElementById("tableIndex");
const row = table.insertRow(4);

const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);
cell1.innerHTML = "Average grade";
cell2.innerHTML = average.toFixed(1);

// 2. Change background colour
let list = document.getElementsByClassName("course");
console.log(list);

for (let i = 0; i < list.length; i++) {
    // console.log(list[i].textContent);
    if (!(i % 2)) {
        list[i].style.backgroundColor = "red";
    }
}

// 3. Creating HTML image element
/* Create a function createImageElement(imageSrcName) which creates an HTML image element in JavaScript and add it to the DOM. For images you can use http://lorempixel.com/ */
function createImageElement(imageSrcName) {
    const img = new Image(400, 200); // width, height
    img.src = imageSrcName;
    document.body.appendChild(img);
}

randomImage = "http://lorempixel.com/400/200/"

createImageElement(randomImage);

// 4. Checkboxes
// id = myElement.childNodes.id;
// console.log(id);
function checkboxID() {
    let place = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < place.length; i++) {
        console.log(place[i].id);
    }
}

checkboxID();