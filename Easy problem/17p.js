// Write a function to check if a number is a perfect square.
function isPerfectSquare(num) {
    if (num < 0) return false;
    const sqrt = Math.sqrt(num)
    return sqrt === Math.floor(sqrt)
}
console.log(isPerfectSquare(16))
console.log(isPerfectSquare(15))
console.log(isPerfectSquare(0))
console.log(isPerfectSquare(-4))
