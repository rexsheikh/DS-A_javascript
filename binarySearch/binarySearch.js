// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

var search = function(nums, target) {
    let left = 0; 
    let right = nums.length -1; 
    while(left <= right){
        let middle = Math.floor((left + right)/2);
        let current = nums[middle]
        
        if(current > target){
            right = middle -1;
        }else if(current < target){
            left = middle + 1
        }else{
            return middle
        }
    }
    return -1 
};