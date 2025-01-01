// Write a function to merge two arrays.
function margeArray(array1,array2) {
    return [...array1, ...array2]
}
const array1 = [ 1,2,3]
const array2 = [ 4,5,6]
const margedArray = margeArray(array1,array2)
console.log(margedArray)