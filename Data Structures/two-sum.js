function twoSum(nums, target) {
    let index = {}
    for(let i = 0; i < (nums.length); i++) {
        let solution = target - nums[i]
        if (solution in index) {
            return [index[solution], i]
        }
        
        index[nums[i]] = i
    }
};
const nums = [2,7,11,15]
const target = 9
console.log(twoSum(nums, target))

// should return [0,1] 