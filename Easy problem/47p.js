// Write a function to calculate the sum of all numbers below a given number that are multiples of 3 or 5.
function sumOfMultiples(limit) {
    let sum = 0
    for (let i = 0; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
        
    }
    return sum
}
console.log(sumOfMultiples(10))