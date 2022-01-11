// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
const compareNum = (a, b) => a > b ? `Maximum: ${a}, Minimum: ${b}` : `Maximum: ${b}, Minimum: ${a}`;

const num1 = 129;
const num2 = 251;

console.log(compareNum(num1, num2));