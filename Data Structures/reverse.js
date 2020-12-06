var reverse = function(x) {
    const y = Math.abs(x)
    let string = y.toString()
    let array = string.split("")
    let reverse = array.reverse()
    let join = reverse.join("")
    if (x >= 0 && join < 2147483648) {
        return parseInt(join)
    }else if (x < 0 && join < 2147483648) {
        return parseInt(join) * -1
    }else if (join >= 2147483647){
        return 0 
    }
    
};

const x = -2147483648

console.log(reverse(x))
