var plusOne = function(digits) {
    for (i = digits.length -1; i >= 0; i--){
        digits[i] += 1
        if (digits[i] > 9){
            digits[i] = 0
        }else{
            return digits
        }
    }
    digits.unshift(1)
    return digits
};
number = [1,2,3]
console.log(plusOne(number))