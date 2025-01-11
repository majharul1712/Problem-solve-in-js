// Write a function to find the missing number in an array of consecutive numbers.
function findMissingNumber(arr) {
    const n = arr.length + 1
    const expectedSum = (n*(n+1))/2
    const actualSum = arr.reduce((sum,num)=> sum + num,0)
    return expectedSum - actualSum
}
const input =[1,2,3,5,6]
const missingNumber = findMissingNumber(input)
console.log(`This missing number is : ${missingNumber}`)