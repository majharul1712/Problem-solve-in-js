// Write a program to remove a specific element from an array.
function removeElements(arr,elementToremove) {
    return arr.filter(el => el !==elementToremove)
}
const inputarray= [1,2,3,4,3,5]
const elementToremove= 3
const result = removeElements(inputarray,elementToremove)
console.log(result)