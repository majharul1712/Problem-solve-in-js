// Write a function to calculate the area of a triangle.
function calculateTriangle(base , height) {
    if (base <= 0 || height <= 0) {
        return "Base and height m,ust be greater than zero"
        
    }
    const area = 0.5 * base * height
    return area
    
}
const base = 10
const height = 6
console.log(`The area of the triangle with base ${base} and height ${height} is ${ calculateTriangle(base , height). toFixed(2)}`)