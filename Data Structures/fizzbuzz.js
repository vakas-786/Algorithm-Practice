function fizzBuzz(n) {
    for (let i = 0; i < n; i++){
    if (n%3 === 0 && n%5 === 0){
        return "FizzBuzz"
    }else if(n%3 === 0){
        return "Fizz"
    }else if (n%5 === 0){
        return "Buzz"
    }else {
        return i 
    }
}

}
const arr = 15
console.log(fizzBuzz(arr))