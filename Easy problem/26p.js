// Write a function to remove duplicates from an array.
function removeDublicates(array) {
    return [... new Set(array)]
}
const arrayWithDuplicate = [1,2,2,3,3,4,5]
const uniqueArray = removeDublicates(arrayWithDuplicate)
console.log(uniqueArray)