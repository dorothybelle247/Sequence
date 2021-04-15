{/*
Write a function `canConstruct(target, wordbank)` that accepts a target and an array of strings.
return number
*/}

const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') return 1;

    let totalCount = 0

    for (let word of wordBank) {
        if (target.indexOf(wordBank) === 0) {
            const numWays = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWays
        }
    }
    memo[target] = totalCount;
    return totalCount;
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cb', 'def', 'abcd']))
console.log(countConstruct('pink', ['ink', 'pi', 'nk', 'p', 'pink']))

{/*
Write a function `allConstruct(target, wordBank)` that accepts string and an array of strings
*/}

const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    const result = []

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank, memo)
            const targetWays = suffixWays.map(way => [word, ...way])

            result.push(...targetWays)
        }
    }
    memo[target] = result;
    return result
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(allConstruct('', ['cat', 'dog', 'mouse']))

// tabulation
const fib = (n) => {
    const table = Array(n + 1).fill(0)
    table[1] = 1

    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i]
        table[i + 2] += table[i]
    }
    return table[n]
}
console.log(fib(8))
console.log(fib(4))
console.log(fib(22))
console.log(fib(78))

// const gridTraveler = (m, n) => {
//     const table = Array(m + 1).fill().map(() => Array(n + 1))
// }