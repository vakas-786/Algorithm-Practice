// abba = true
//can the word be a palindrome?
abbba = true
babba =  (abbba) = true
abcba = true
a =true
aa = true
asdfsdfa = true
aaaabbbb =  (bbaaaabb) = true

asdf = false
aaba = false
aaabbb = false

const word = 'asdf'

function Palindrome(word) {
        if (word.length <= 1){
            return true 
        }
        const letterArray = word.split("")
        const solution = new Set(letterArray)

        for(let i = 0; i < letterArray.length; i++){
            const currentLetter = letterArray[i]
            if(solution.has(currentLetter)) {
                solution.delete(currentLetter)
            } else { 
                solution.add (currentLetter)
            }
        }
    
    if (solution.size > 1){
        return true 
    } else{
        return false 
    }
}
console.log(Palindrome(word))

// o(n)


// function isPalindrome(s,i) {
//     return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
//    }

// console.log(isPalindrome('bbaaaabb'))

// const word = 'pneumonoultramicroscopicsilicovolcanoconiosis'

// function getObjFromStr(word) {
//     const letters = {}
//     const letterArray = word.split("")
// 	for(i = 0; i < word.length; i++) {
//         letters[word[i]] = -1
//         const currentLetter = letterArray[i]
//         if(letterArray.has(currentLetter)) {
//             letters[word[i]] += 1
//         }   
//     }
//     console.log(letterArray)
//     return letters
    
// }

// console.log(getObjFromStr(word))