// Write program to take a month as an input from the user and find out whether the month has 31 days or not.
const input = prompt("Enter any Month of the year (Note: Jan for January, Feb for February...)");
const monthsArr = ["JAN", "MAR", "MAY", "JUL", "OCT", "DEC"]

const res = input => monthsArr.includes(input) ? `${input} has 31 days` : `${input} doesn't have 31 days`;

console.log(res(input.toUpperCase()));