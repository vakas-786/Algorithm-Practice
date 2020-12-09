var removeElement = function(nums, val) {
    const array = []
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== val){
            array.push(nums[i])
        }
    }
     nums.splice(0, nums.length, ...array)
     return nums
};

const nums = [3,2,2,3]
const val = 3

console.log(removeElement(nums, val))