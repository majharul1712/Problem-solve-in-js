// Write a program to print the Fibonacci sequence up to a given number.
function fibonacciUpTo(maxNumber) {
    if (maxNumber < 0) {
        console.log("Please enter a non-negative number.");
        return;
    }

    let a = 0, b = 1;
    let fibonacciSequence = [];

    while (a <= maxNumber) {
        fibonacciSequence.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }

    console.log(`Fibonacci sequence up to ${maxNumber}: ${fibonacciSequence.join(", ")}`);
}

// Example: Call the function with a number
fibonacciUpTo(50);
