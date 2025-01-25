// Write a function to generate a random hexadecimal color code.
function getRandomHexColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16); // Generate a random number and convert it to hex
    return `#${hex.padStart(6, '0')}`; // Ensure it's always 6 characters long
}

// Example usage:
console.log(getRandomHexColor()); // Output: e.g., #1a2b3c
