// Write a function to check if a number is prime.
function chackPrime(num) {
let flag = true ;
if (num <= 1) {
    flag = false
}else{
    for (let i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
}
if (flag == true) {
    console.log( num +"it is prime")
}else{
    console.log( num +"it is not prime")
}
}
chackPrime(4)
chackPrime(5)