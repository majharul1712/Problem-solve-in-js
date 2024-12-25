// Write a function to calculate the area of a rectangle.
function calculateRectangle(lenght , width) {
    if (lenght <= 0 || width <=0) {
        return "Lenght and width must be greaten zero "       
    }
    const area = lenght * width
    return area    
}
const lenght = 8
const width = 5
console.log(`The area of the rectangle with lenght ${ lenght} and width ${width} is ${calculateRectangle(lenght,width)}`)