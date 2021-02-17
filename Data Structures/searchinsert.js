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

// var searchInsert = function(nums, target) {
//     let i = 0;
//     let j = nums.length;
//      while (i <= j ) {
//          const middle = Math.floor((j + i)/2)
         
//          if (nums[middle] === target){
//              return middle
//          }else if (nums[middle] < target){
//              i += 1
//          }else {
//              j -= 1 
//          }
         
//      }
//      return i
//  };