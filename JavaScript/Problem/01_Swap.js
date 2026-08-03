let num1 = 10
let num2 = 20

console.log(`Before Swap: num1 = ${num1}, num2 = ${num2}`);

num1 = num1 + num2
num2 = num1 - num2
num1 = num1 - num2

console.log(`After Swap: num1 = ${num1}, num2 = ${num2}`);