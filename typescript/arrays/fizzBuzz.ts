export {}

// O(n) - checks up to 3 conditions per iteration
function fizzBuzz(n: number): void {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

// O(n) - builds the result string once per iteration, avoids redundant modulo checks
function fizzBuzz2(n: number): void {
    for (let i = 1; i <= n; i++) {
        let result = ""
        if (i % 3 === 0) result += "Fizz"
        if (i % 5 === 0) result += "Buzz"
        console.log(result || i)
    }
}

fizzBuzz(15)
console.log("---")
fizzBuzz2(15)
