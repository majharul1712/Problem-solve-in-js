// Write a function to count the occurrences of a value in an array.
function countOccurrencesValue(array,value) {
    return array.reduce((count,current) => (current === value? count + 1 : count),0)
}
const arr = [1,2,3,4,2,2,5]
const valueCount = 2
console.log(`The value ${valueCount} occurrences ${countOccurrencesValue(arr,valueCount)}`)