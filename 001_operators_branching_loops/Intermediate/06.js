// Write a Program to take a number input from user and find if the number is Prime or not.

const checkPrime = n => {
    let limit = Math.floor(n / 2);
    console.log(limit);

    for (let i = 2; i <= limit; i++) {
        if (n % i === 0)
            return `${n} is not a prime number`;
    }
    return `${n} is a prime number`;
};

console.log(checkPrime(4));