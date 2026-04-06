
// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
const today = new Date();

// 2. Get the current month, day, and year
let month = today.getMonth() + 1; 

// 3. Adjust month if needed (JavaScript months are 0-based)
let day = today.getDate();
let year = today.getFullYear();

// 4. Add leading zeros to month/day if needed
let formattedMonth = month.toString().padStart(2, '0');
let formattedDay = day.toString().padStart(2, '0');

// 5. Create a string in the format: "Today is MM/DD/YYYY"
const dateString = `Today is ${formattedMonth}/${formattedDay}/${year}`;

// 6. Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").textContent = dateString;


// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")

let myVal1 = "75";            // A numeric string
let myVal2 = "12.345";        // A string with a decimal
let myVal3 = "CSUN Master";   // A string that cannot be a number
let myVal4 = "007";           // A numeric string with leading zeros

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()

// Variable 1
let num1 = Number(myVal1);
let nan1 = Number.isNaN(num1);
let int1 = Number.isInteger(num1);

// Variable 2
let num2 = Number(myVal2);
let nan2 = Number.isNaN(num2);
let int2 = Number.isInteger(num2);

// Variable 3
let num3 = Number(myVal3);
let nan3 = Number.isNaN(num3);
let int3 = Number.isInteger(num3);

// Variable 4
let num4 = Number(myVal4);
let nan4 = Number.isNaN(num4);
let int4 = Number.isInteger(num4);

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)

// We use <br> to make sure each result starts on a new line in the browser
let displayResults = `Original: "${myVal1}" -> Converted: ${num1} -> isNaN: ${nan1} -> isInteger: ${int1}<br>`;
displayResults += `Original: "${myVal2}" -> Converted: ${num2} -> isNaN: ${nan2} -> isInteger: ${int2}<br>`;
displayResults += `Original: "${myVal3}" -> Converted: ${num3} -> isNaN: ${nan3} -> isInteger: ${int3}<br>`;
displayResults += `Original: "${myVal4}" -> Converted: ${num4} -> isNaN: ${nan4} -> isInteger: ${int4}`;

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"
document.getElementById("numberConversionOutput").innerHTML = displayResults;



// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:

// 1. Create at least 2-3 numeric variables
let itemPrice = 24.99;
let quantity = 2;
let taxRate = 0.07;


// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
let subtotal = itemPrice * quantity; // Multiplication
let taxAmount = subtotal * taxRate;   // Multiplication for tax
let totalWithTax = subtotal + (subtotal * taxRate); // Addition

// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
let formattedSubtotal = subtotal.toFixed(2);
let formattedTax = taxAmount.toFixed(2);
let formattedTotal = totalWithTax.toFixed(2);


// 4. Build a string showing your results
let mathMessage = `Subtotal for ${quantity} items: $${formattedSubtotal}<br>`;
mathMessage += `Total tax: $${formattedTax}<br>`;
mathMessage += `Total with tax (formatted): $${formattedTotal}`;

// 5. Display the results inside the element with id="mathOutput"
document.getElementById("mathOutput").innerHTML = mathMessage;



// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
let conditionalSection = document.createElement("div");

// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)

// Condition A: Check if a conversion from Part 2 was NaN
// Updated Part 4 Conditionals
if (Number.isNaN(num3)) {
    // Change 'hello' to match your custom variable text
    conditionalSection.innerHTML += `<p>Validation: '${myVal3}' is not a valid number.</p>`;
} else {
    conditionalSection.innerHTML += `<p>Validation: '${myVal3}' is valid.</p>`;
}

// Condition B: Check if the total price is high
if (totalWithTax > 40) {
    conditionalSection.innerHTML += "<p>Reward: You earned a 10% discount on your next visit!</p>";
} else {
    conditionalSection.innerHTML += "<p>Reward: Spend more than $40 to earn a discount!</p>";
}

document.body.appendChild(conditionalSection);