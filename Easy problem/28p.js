// Write a function to sort an array in descending order.

function sortArrayDescending(array) {
    return array.sort((a,b) => b - a)
}
const unsortArray = [8,2,5,4,3,1]
const sortArray = sortArrayDescending(unsortArray)
console.log(sortArray)