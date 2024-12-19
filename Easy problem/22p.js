// Write a program to print the first 10 prime numbers
function printFistTenNPrime(n) {
    let count = 0, num = 2
    while (count < n) {
        if (isPrime(num)) {
            console.log(num)
            count++
        }
        num++
    }
    
}
function isPrime(num) {
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
        
    
    
}
return num > 1
}
printFistTenNPrime(10)