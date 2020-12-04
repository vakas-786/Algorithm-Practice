var lengthOfLongestSubstring = function(s) {
    let left = 0 
    let right = 0 
    let max = 0

    const set = new Set()

    while(right < s.length) {
        if (!set.has(s.charAt(right))){
            set.add(s.charAt(right))
            right ++
            max = Math.max(set.size, max)
        } else {
            set.delete(s.charAt(left))
            left ++
        }
    }
    return max
};
const s = 'pwwkew'
console.log(lengthOfLongestSubstring(s))


// const unique = new Set()
//     let str = ''
//     for (let i=0; i < s.length; i ++){
//         unique.add(s.indexOf(s[i]))
//     }
//     let array = Array.from(unique)
//     for (let j =0; j < unique.size - 1; j ++){
//         if (array[j + 1] - array[j] !== 1){
//             array.shift()
//         }
//         str += s[array[j]]
//     }
    
//     return array