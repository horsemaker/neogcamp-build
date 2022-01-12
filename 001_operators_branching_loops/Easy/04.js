// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const numArr = [8, 23, 17];
const [num1, num2, num3] = numArr;

// Using Math
console.log("Max:", Math.max(...numArr));

// Using rest operator
const compareNum = (...rest) => {
    let maxNum = 0;
    rest.forEach((num) => { if (num > maxNum) maxNum = num; });
    return `Max: ${maxNum}`;
};
console.log(compareNum(...numArr));

// Using arguments
function comapreNum2() {
    let maxNum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxNum) {
            maxNum = arguments[i];
        }
    }
    return `Max: ${maxNum}`;
}
console.log(comapreNum2(...numArr));