// Write a program to find the second largest number in an array.
function secondLargestNumber(array) {
    if (array.lenght < 2) {
        return"Array must contain least two words"
    }
    let largest = -Infinity
    let secondLarget = -Infinity
    for(let num of array){
        if (num > largest) {
            secondLarget = largest
            largest = num

        }
        else if (num>secondLarget && num< largest ) {
            secondLarget = num
        }
        
    }
    return secondLarget === -Infinity ? "No secendary lergest number found ." : secondLarget;
}
const number = [1,2,3,4,5,6,6,7,8,8]
console.log(secondLargestNumber(number))