// Write a function to check if a number is a palindrome
function isPalindrome(number) {
    if (number < 0)return false
    const str = number.toString()
    return str === str.split('').reverse().join('')
}
console.log(isPalindrome(121))
console.log(isPalindrome(120))
console.log(isPalindrome(-123))
console.log(isPalindrome(232))
console.log(isPalindrome(454))