// Write a program to find the factorial of a number in js
function chackFactorial(num) {
    if (num < 0) {
        return "Factorial not defined for negative numbers"
    }
    let result = 1
    for (let i = 2; i <=num; i++) {
        result *= i
        
    }
    return result
    
}
console.log(chackFactorial(6))
console.log(chackFactorial(3))
console.log(chackFactorial(-2))