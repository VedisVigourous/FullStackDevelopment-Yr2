/* Object is a collection of 
   - Key Value pair but
   - Unordered */

/* Declaration of Object */

const person = {
    name: "Vedant",
    age: 20
}

/* Accessing Object Properties 
   - 1. Dot Notation 
   - 2. Array/Bracket Notation */

console.log(person.name); // Dot Notation
console.log(person["age"]); // Array/Bracket Notation


/* Special Cases -> Space in property name 
   - Can be accessed only using Array/Bracket Notation */
const student = {
    "first name": "Vedant",
    "last name": "Chauhaan"
}

console.log(student["first name"]); 
console.log(student["last name"]); 


// ******** //


/* Updation of Adding or property */
person.gender = "Male"; 

/* Deletion of property
   - Using delete operator */
delete person.age;