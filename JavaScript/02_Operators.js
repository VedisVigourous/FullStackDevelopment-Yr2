/* Operators 
   - Addition
   - Subtraction
    - Multiplication
    - Division
    - Modulus
    - Increment
    - Decrement
    - Exponential */

let a = 5;
let b = 10;

console.log(`\nUsing of Operators >`);
console.table({
    "Addition": a + b,
    "Subtraction": a - b,
    "Multiplication": a * b,
    "Division": a / b,
    "Modulus": a % b,
    "Increment": ++a,
    "Decrement": --b,
    "Exponential": a ** 2
})