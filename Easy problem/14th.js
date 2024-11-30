// Write a program to find the average of numbers in an array.

const aver = array => array.reduce(
    (a,b) => a + b
) / array.length;

console.log(aver([1, 2, 3, 4, 5]));
