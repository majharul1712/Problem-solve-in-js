// Write a function to find the intersection of two arrays.
function fingIntersection(array1, array2) {
    return array1.filter(element => array2.includes(element))
}
const array1 = [1,2,3,4]
const array2 = [3,4,5,6 ]
const intersection = fingIntersection(array1,array2)

console.log(intersection)