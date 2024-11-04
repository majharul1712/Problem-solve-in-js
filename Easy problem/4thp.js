// Write a program to reverse a string.(Ques)
function reverseString(str) {
    return str.split('').reverse().join('');
}
 const originalString = "Hello "
 const reversedString = reverseString(originalString)

 console.log(reversedString)
