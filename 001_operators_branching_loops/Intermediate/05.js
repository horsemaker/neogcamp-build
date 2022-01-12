// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120
const factorial = n => n === 0 ? 1 : n * factorial(n - 1);

console.log(factorial(5));