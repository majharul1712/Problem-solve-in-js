// Write a function to calculate the area of a circle.
function calculateCircle(redious) {
    if (redious <= 0) {
        return "Radius must be greater than zero."
    }
    const area = Math.PI * Math.pow(redious,2)
    return area
}
 const redious = 4
 console.log(`The area of the circle with redious ${redious} and ${ calculateCircle(redious)}`)