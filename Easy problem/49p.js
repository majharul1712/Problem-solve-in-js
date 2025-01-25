// Write a function to rotate an array n times.
function rotateArray(arr, n) {
    const length = arr.length
    n = ((n % length) + length ) % length 
    return arr.slice(-n).concat(arr.slice(0,-n))
}
const array = [1,2,3,4,5]
const rotated = rotateArray(array,2)
console.log(rotated)