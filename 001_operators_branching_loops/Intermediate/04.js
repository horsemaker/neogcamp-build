// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

let fiboSeq = [0, 1];

const fibonacci = (n) => {
    for (let i = 2; i < n; ++i) {
        fiboSeq[i] = fiboSeq[i - 1] + fiboSeq[i - 2];
    }
    console.log(...fiboSeq);
};

fibonacci(10);