console.log("hello world")

// exponential time complexity
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1)+fib(n - 2)
}

console.log(fib(6));
console.log(fib(12));
console.log(fib(5));

// memoization
const fib1 = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib1(n-1, memo) + fib1(n-2, memo);
    return memo[n]
}
console.log(fib1(12));
console.log(fib1(53));


const foo = (n) => {
    if (n <= 1) return;
    foo(n - 1);
}

const dib = (n) => {
    if (n <= 1) return;
    dib(n - 1);
    dib(n - 1)
}
console.log(dib(23))

const lib = (n) => {
    if (n <= 1) return;
    lib(n - 2);
    lib(n - 2)
}

{/*
say that you are a travelor on a 2D grid. You begin in the top-left corner and your goal is to travel at the bottom-right corner. You may only move down or right.

In how many ways can you travel to the goal on a grid with dimensions m * n

write a function `gridTraveler(m, n)` that calculates this.
*/}
const gridTraveler = (m, n, memo={}) => {
    // chech for memo
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if ( m === 1 && n === 1) return 1;
    if ( m === 0 || n === 0) return 0;
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
}
console.log(gridTraveler(1, 1));
console.log(gridTraveler(1, 1));
console.log(gridTraveler(22, 12));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(1, 1));