nums = [1,1,2]
var removeDuplicates = function(nums) {
    nums.splice(0, nums.length, ...(new Set(nums)))
}

console.log(removeDuplicates(nums))