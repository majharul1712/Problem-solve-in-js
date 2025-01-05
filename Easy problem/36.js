// Write a program to flatten a nested array.
function flatterNasted(nastedArray) {
    let flatArray = [];
    nastedArray.forEach(element => {
        if (Array.isArray(element)) {
            flatArray = flatArray.concat(flatterNasted(element))
        }else(
            flatArray.push(element)
        )
    });
    return flatArray
}
const nastedArray = [1, [2, [3, [4, 5]], 6], 7, [8, 9]];
const flatArray = flatterNasted(nastedArray)
console.log(flatArray)