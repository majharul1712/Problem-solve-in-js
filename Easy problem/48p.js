// Write a program to convert a string to an array of characters.
function stringToArray(str) {
    return str.split('')
}
const inputString = "I am Munna"
const charArray = stringToArray(inputString)
console.log(charArray)