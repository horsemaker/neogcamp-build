// Write a program to take a number input from user and print multiplication table 12 times for that number.

const input = prompt("Enter any number");

for (let i = 1; i <= 12; i++) {
    console.log(`${input} x ${i} = ${input * i}`);
}