// Write a program to shuffle the elements of an array.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--){
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array
}
const arr = [1,2,3,4,5,6]
console.log("Original array:",arr)
const shuffledArray = shuffleArray([...arr])
console.log("Shuffled Array", shuffledArray)
