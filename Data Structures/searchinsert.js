var searchInsert = function(nums, target) {
    
    for (let i =0; i < nums.length; i++){
        if (nums[i] === target || nums[i] > target) {
            return i 
        }
    }
};
array = [1,3,5,6]
number = 5
console.log(searchInsert(array, number))