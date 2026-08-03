/* JavaScript mainly has 5 types of conditionals: 
   - if statement
   - if...else statement
   - Nested if...else statement
   - Switch statement
   - Ternary operator */

let n1 = 10
let n2 = 20
let n3

if(n1 < 5){
    n3 = 30
}

console.table({
    "Value of n1": n1,
    "Value of n2": n2,
    "Value of n3": n3
})


// Program to check leap year

let year = 2020

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`\n> ${year} is a leap year`)
}

// Program to check leap year with ternary operator with nesting

let year2 = 2021
let isLeapYear = (year2 % 4 === 0 && year2 % 100 !== 0) ? (year2 % 400 === 0 ? `${year2} is a leap year` : `${year2} is not a leap year`) : `${year2} is not a leap year`
console.log(`\n> ${isLeapYear}\n`)


// *********** Switch Case *********** //

let day = 2

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong Value Entered!");
        break;
}


// Calculator using Switch Case

let calc1 = 30
let calc2 = 60

console.log(`\n1: Addition\n2: Substration\n3: Mulitplication \n4: Division\n`);
let choice = 4;


switch(choice){
    case 1: 
        console.log(`Sum: ${calc1 + calc2}`);
        break;
    case 2: 
        console.log(`Difference: ${calc1 - calc2}`);
        break;
    case 3: 
        console.log(`Product: ${calc1 * calc2}`);
        break;
    case 4: 
        if(calc2!=0){
            console.log(`Quotient: ${calc1 / calc2}`);
        }
        else {
            console.log("Not divisible by 0!");
        }
        break;
}
