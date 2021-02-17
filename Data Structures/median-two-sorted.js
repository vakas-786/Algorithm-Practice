var findMedianSortedArrays = function(nums1, nums2) {
    const nums = nums1.concat(nums2)
    nums.sort( function(a,b) { return a - b; } )
    if (((nums.length + 1) % 2 ) === 0){
        let median = (nums.length + 1)/2
        return nums[median - 1]
    } else {
       let first = (nums.length/2) 
       let second = first + 1
       let med1 = nums[first - 1]
       let med2 = nums[second - 1]
       const median = (med1 + med2)/2
       return median 
    }    
};
nums1 = [3,2]
nums2 = [1,7,5]

console.log(findMedianSortedArrays(nums1, nums2))