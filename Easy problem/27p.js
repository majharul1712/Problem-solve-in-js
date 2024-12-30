// Write a function to sort an array in ascending order.
 function sortArrayAscending(array) {
    return array.sort((a,b) => a - b)
 }
 const unsortArray = [ 5,9,4,2,3,1]
 const sortArray = sortArrayAscending(unsortArray)
 console.log(sortArray)