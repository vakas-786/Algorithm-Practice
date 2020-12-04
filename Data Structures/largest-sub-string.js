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
console.log([lengthOfLongestSubstring(s)])


