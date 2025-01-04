// Write a program to find the second smallest number in an array.

function secondSmallestNumber(array) {
    if (array.lenght < 2) {
        return "Array must contain ast least two words."
    }
    let smallest = Infinity
    let secendarSmallest = Infinity
      for(let num of array ){
        if (num < smallest)[secendarSmallest,smallest] = [smallest,num]; else if(num< secendarSmallest && num>smallest) secendarSmallest = num;    
        }
        return secendarSmallest === Infinity? null : secendarSmallest;
}
console.log(secondSmallestNumber([1,5,6,9,8,4,2,3]))