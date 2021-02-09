var lengthOfLastWord = function(s) {
    const wordArray = s.trim().split(/(\s+)/)
    const last = wordArray.length - 1
    if (wordArray[last] === ''){
        return 0
    }else {
        return wordArray[last].length
    }
};

const sentence = "Hello World"
console.log(lengthOfLastWord(sentence))