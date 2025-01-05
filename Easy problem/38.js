// Write a program to remove all falsy values from an array.
function removeFalsyValue(array) {
    return array.filter(Boolean)
}
const falsyValue = [ 1,2,3,false,NaN,4,undefined,"hello"]
const filterValue = removeFalsyValue(falsyValue)
console.log(filterValue)