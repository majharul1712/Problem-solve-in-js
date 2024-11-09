// Write a program that checks if a string is a palindrome.
// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Convert the string to lowercase to make the check case-insensitive
    str = str.toLowerCase();

    // Remove any non-alphanumeric characters (optional, for cleaner comparison)
    str = str.replace(/[^a-z0-9]/g, '');

    // Compare the string with its reverse
    let reversedStr = str.split('').reverse().join('');

    // Check if the string and its reversed version are the same
    if (str === reversedStr) {
        console.log("The string is a palindrome");
    } else {
        console.log("The string is not a palindrome");
    }
}

// Example usage
isPalindrome("Radar");      // Output: The string is a palindrome
isPalindrome("apple");      // Output: The string is not a palindrome
isPalindrome("A man, a plan, a canal, Panama!");  // Output: The string is a palindrome
