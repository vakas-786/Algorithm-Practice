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

const word = 'aabbaa'

function Palindrome(x) {
    if(x < 0) return false;

    let s = String(x).split("");
    let i = 0;
    let j = s.length-1;
	for(i < j;i++,j--;){
        if(s[i] !== s[j]){
            return false;
        } 
    } 

	return true;
}
console.log(Palindrome(word))

