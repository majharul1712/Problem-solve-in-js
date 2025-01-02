// Write a function to check if two strings are anagrams.
function areAnagrams(str1, str2) {
     str1 = str1.replace(/\s+/g, "").toLowerCase()
     str2 = str2.replace(/\s+/g, "").toLowerCase()

     if (str1.lenght !== str2.lenght) {
        return false 
     }
     const shortStr1 = str1.split('').sort().join()
     const shortStr2 = str2.split('').sort().join()

     return shortStr1 == shortStr2
}
console.log(areAnagrams("listen","silent"))
console.log(areAnagrams("Hello","would"))