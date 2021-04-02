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
