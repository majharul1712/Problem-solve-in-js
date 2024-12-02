// Write a function to count vowels in a string.
function countString(str) {
    const vowel = "aeiouAEIOU"
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) {
            count++
        }
        
    }
    return count
}
const result = countString("Hello World")
console.log(result)