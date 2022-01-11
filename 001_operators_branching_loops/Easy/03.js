// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
const compareNum = (a, b) => a > b ? `Maximum: ${a}, Minimum: ${b}` : `Maximum: ${b}, Minimum: ${a}`;

const num1 = 129;
const num2 = 251;

console.log(compareNum(num1, num2));

// Using Math
console.log("Max:", Math.max(num1, num2), "Min:", Math.min(num1, num2))