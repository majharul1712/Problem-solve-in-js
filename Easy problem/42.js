// Write a program to find the longest word in a string.
function fineLongestWord(str) {
    const words = str.split(' ');
    const longestWord = words.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
      }, "")
    return longestWord
}
const input = "The quick brown fox jumps over the lazy dog";
const result = fineLongestWord(input);
console.log("The longest word is:", result);
