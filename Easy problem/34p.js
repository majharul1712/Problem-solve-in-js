// Write a function to calculate the sum of digits of a number
function sunOfDigit(num) {
    if (num < 0) num = Math.abs(num)
        let sum = 0;
    while(num > 0){
        sum += num %10
        num = Math.floor(num / 10)
    }     
    return sum
}
console.log(sunOfDigit(123))
console.log(sunOfDigit(156))
console.log(sunOfDigit(0))