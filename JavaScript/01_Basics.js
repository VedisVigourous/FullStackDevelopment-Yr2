console.log(`First Print: Hello World!`);

// Variables

var myName = "Vadanta Kumar Chauhaan"

// Printing Variables
console.log(`Author: ${myName}`);

// Type of function! 
console.log(`Type of: ${typeof myName}`);

/* var is re-declarable and re-assignable */
var myName = "Vedant Chauhaan"
console.log(`\nUpdated Author: ${myName}`);


// ==================== //

/* let - 
   - It is not re-declarable but re-assignable
   - has scope restrictions */

let myAge = 21;
// Reassigning 
myAge = 20;

console.log(`Age: ${myAge}`);

/* const - 
   - It is non - mutable 
   - Can consist or arrays and object whose, properties can be changed but the reference cannot be changed */

const myCity = "Delhi";
// myCity = "Indore"; // This will throw an error
console.log(`City: ${myCity}`);


// ===================== //
console.log();


// Using of type of operator

let myVariable = 10;
let nullVar = null;
let undefinedVar;

console.table({
    "myVariable": typeof myVariable,
    "nullVar": typeof nullVar,
    "undefinedVar": typeof undefinedVar
})