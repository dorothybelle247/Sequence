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

//memoization dynamic
{/*
Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an of numbers as argunents
*/}
const canSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for (let num of numbers){
        console.log(num)
        const remainder = targetSum - num;
       if (canSum(remainder, numbers, memo) === true){
           memo[targetSum] = true;
           return true; 
       }
    }
    memo[targetSum] = false;
    return false;
}

console.log(canSum(5,[3,2]))
console.log(canSum(40,[20,60]))

{/*
write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.
*/}

const howSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers){
        const remainder = targetSum - num;
       const remaiderResult = howSum(remainder, numbers, memo);
       if (remaiderResult !== null){
         memo[targetSum] = [...remaiderResult, num];
         return memo[targetSum];
       }
    }
    memo[targetSum] = null;
    return null;
}

console.log(howSum(7,[5,3,4,7]))
console.log(howSum(27,[21,6]))

// equals -- optiml numbers for shortest combination

const bestSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return[];
    if (targetSum < 0) return null;

    let shortestCombination = null

    for (let num of numbers){
        const remainder = targetSum - num;
       const remainderCombination = bestSum(remainder, numbers, memo)
       if (remainderCombination !== null){
           const combination = [...remainderCombination, num]
        //    check
        if (shortestCombination === null || combination.length < shortestCombination.length){
            shortestCombination = combination;
        }
       }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

console.log(bestSum(7,[5,3,4,7]))
console.log(bestSum(27,[21,6]))
console.log(bestSum(9,[1,6,3,3]))

{/*write a function `canConstruct(target, workbank)` that accepts a target string and an array of strings.*/}

const canConstruct =(target, wordBank) => {
    if (target === '') {
        return true;
    }
    for (let word of wordBank){
        if (target.indexOf(word) === 0){
           const suffix = target.slice(word.length)
          if (canConstruct(suffix, wordBank) === true){
              return true
          }
        }
    }
    return false;
}

console.log(canConstruct("at", ["cat", "dog", "mouse"]));
console.log(canConstruct("gog", ["cat", "dog", "mouse"]));
