// Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
const numArr = [35, 29, 46];
const [num1, num2, num3] = numArr;

// Using Math
console.log("Min:", Math.min(...numArr));