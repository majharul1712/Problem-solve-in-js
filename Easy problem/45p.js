// Write a program to check if a string contains only digits
function containOnlyDigit(str) {
    return /^\d+$/.test(str)
}
console.log(containOnlyDigit("12345"))
console.log(containOnlyDigit("123n5"))
console.log(containOnlyDigit(""))