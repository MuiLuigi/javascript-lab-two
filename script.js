//Step 2
let number = 0; // Assign any number here
 
if (number > 0) {
    // Output for positive numbers
    console.log('The number is greater than 0')
} else if (number < 0) {
    // Output for negative numbers
    console.log('The number is less than 0')
} else {
    // Output for zero
    console.log('The number is exactly 0')
}

//Step 3
var day = 6
switch (day) {
    case 1:
        // Output Sunday
        console.log('Sunday')
        break;
    // Add more cases
    case 2:
        console.log('Monday')
        break;
    case 3:
        console.log('Tuesday')
        break;
    case 4:
        console.log('Wednesday')
        break;
    case 5:
        console.log('Thursday')
        break;
    case 6:
        console.log('Friday')
        break;
    case 7:
        console.log('Saturday')
        break;
    default:
        console.log('This is not a day of the week')
}

//Step 4
for (let i = 1; i <= 5; i++) {
    // Print i
    console.log(i)
    if (i === 5){
        break;
    }
}

let i = 1;
 
while (i <= 5) { 
// Print i and increment
console.log(i)
i++
﻿ }

let j = 1; 
 
do {
 // Print j j++; 
 console.log("j = " + (j + 1))
 j++
﻿} while (j <= 5);

//Step 5
for(let i = 1; i <=6; i++) {
    console.log(i)
    if (i === 3) {
        // Use Break here
        break;
      }
}
console.log("Loop exited at i = 3")

var addNumber = [1, 2, 3, 4, 5, 6]
for(let i = 0; i < addNumber.length; i++) {
    if (addNumber[i] === 3) {
        // Use continue here
        continue;
      }
    console.log(addNumber[i])
}

//Step 6
let globalVar = "I'm global!";
 
function scopeExample() {
    let localVar = "I'm local!";
    // Access globalVar and localVar inside the function
    console.log(globalVar);
    console.log(localVar);
}
scopeExample(); //Used to call the function