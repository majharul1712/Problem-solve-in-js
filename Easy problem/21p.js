// Write a function that swaps two numbers without using a temporary variable.
function swapsNumber(a ,b) {
    console.log(`Before swaps; a= ${a}, b= ${b}`)
    a = a+b
    b= a-b
    a= a-b
    console.log(`After swaps; a= ${a}, b= ${b}`) 
    return {a,b}
}
const result = swapsNumber(5,10)