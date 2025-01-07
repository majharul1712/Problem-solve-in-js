// Write a function to capitalize the first letter of each word in a string.
function capitalizeWord(str) {
    return str
    .split('')
    .map(word => word.charAt(0).toUpperCase()+word.slice(1))
    .join('')
}
const input = "hi i am munna! welcome to my world"
const result = capitalizeWord(input)
console.log(result)