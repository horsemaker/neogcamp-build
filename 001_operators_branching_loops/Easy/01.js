// Write a program to add 5 numbers.The value of numbers are num1 = 5, num2 = 13, num3 = 7, num4 = 21 and num5 = 48.
const add = (...rest) => rest.reduce((a, b) => a + b);
console.log(add(1, 2, 3, 99));

const numArray = [5, 13, 7, 21, 48];
const [num1, num2, num3, num4, num5] = numArray;

console.log(add(...numArray));
console.log(add(num1, num2, num3, num4, num5));

// reduce => deduce a single value from the whole array ; returns a value
// forEcah => act on every single value of the array ; returns undefined
// map => returns array ; take every value and do operation on it => shallow copy
// filter => returns array; specific condition => shallow copy