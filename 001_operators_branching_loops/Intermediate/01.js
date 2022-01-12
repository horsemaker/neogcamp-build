// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

// Way 1
const array = [...Array(101).keys()];
array.shift();

console.log(
    ...array.map((x) => {
        let val = "";
        if (x % 3 === 0) val += "Fizz";
        if (x % 5 === 0) val += "Buzz";
        //(x % 3 === 0) ? ((x % 5 === 0) ? val = "FizzBuzz" : val = "Fizz") : ((x % 5 === 0) ? val = "Buzz" : "")
        return (val || x);
    })
);

// Way 2
let output = '';
for (let num = 1; num <= 100; num++) {
    let value = '';
    if (num % 3 === 0) value += "Fizz";
    if (num % 5 === 0) value += "Buzz";
    output += `${value || num}, `;
}
console.log(output);