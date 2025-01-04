// Write a function to reverse an array.
function reverseArray(arr) {
    let start = 0
    let end = arr.length -1
    while(start < end){
        [arr[start],arr[end]] = [arr[end],arr[start]]
        start++
        end--
    }
    return arr
}
console.log(reverseArray([1,2,3,4,5]))
console.log(reverseArray(["a","b","c"]))

