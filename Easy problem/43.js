// Write a program to find the shortest word in a string.
function findShortestWord(str) {
    if(!str.trim()) return null;
    const words = str.split(' ').filter(words => words.trim().length > 0)
    let shortest = words [0]
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i]
        }
        
    }
    return shortest
}
const input = "This is a test string with short and shoter word"
const shortestWord = findShortestWord(input)
console.log(`this shortest word: "${shortestWord}"`)