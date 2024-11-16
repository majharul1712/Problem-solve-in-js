// Write a program to find the sum of all numbers in an array.
const num = [ 5,1,2,6,4]
const totalSum = sumArray (num)
function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        
    }
    return sum;
}
sumArray()
console.log(totalSum)