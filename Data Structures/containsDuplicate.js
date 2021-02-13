var containsDuplicate = function(nums) {
    
    let set = new Set()
    let counter = 0
    for (let i = 0; i < nums.length; i++){
        if (!set.has(nums[i])){
            set.add(nums[i])
        }else {
            counter ++
        }
    }
    
    return counter > 0 ? true : false 
    
    
};
array = [1,2,3,1]
console.log(containsDuplicate(array))