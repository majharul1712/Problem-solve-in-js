// Write a function to count words in a string.



function wordCount(str) {
    let totalwords = 0;
    let words = str.trim().split(/\s+/);
    totalwords = words[0] === "" ? 0 : words.length; // Corrected 'lenght' to 'length'
    return totalwords;
}

console.log(wordCount("Hello Would")); // Output: 2
console.log(wordCount("This is a test")); // Output: 4
console.log(wordCount("")); // Output: 0
console.log(wordCount("   ")); // Output: 0
console.log(wordCount("Hello,     World!")); // Output: 2
