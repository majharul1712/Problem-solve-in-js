// Write a function to convert Fahrenheit to Celsius.
let fahre = 90
let celSiud = fahrenheitTocelsius (fahre)
function fahrenheitTocelsius(fahre) {
    return ((fahre - 32)* 5/9)
}
console.log(fahrenheitTocelsius + "℉ is" + celSiud.toFixed(2)+ "℃" )
