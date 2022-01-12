// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

for (let num = 1; num <= 100; num++) {
    let output = '';
    if (num % 3 === 0) output += "Fizz";
    if (num % 5 === 0) output += "Buzz";
    console.log(output || num);
}