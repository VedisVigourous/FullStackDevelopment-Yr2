/* Comma operator is used to evaluate multiple expression
    - It evaluates from left to right and returns the value of the last expression */

// Example:
let x = 10
let y = (x++ , x+1)

console.table({
    "X =": x,
    "Y =": y
})


// Problem Statment: Reversing of an array using comma operator
let arr = [0, 1, 2, 3, 4];

console.log(`Original Array = ${arr}`);

for(let i = 0, j = arr.length - 1; i < j; i++, j--) {
    (temp = arr[i], arr[i] = arr[j], arr[j] = temp);
}

console.log(`Reversed Array = ${arr}`);