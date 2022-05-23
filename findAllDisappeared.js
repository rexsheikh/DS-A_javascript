// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

// //loop through the array and check indices. if 
// an index has been checked, it becomes negative. [1,4,2,2]
// subtract one to get index. 1-1 should be at zero index, 
// so mark 0 index as negative. 
// 1-1 = 0, therefore [-1,4,2,2]
// 4-1 = 3 therefore [-1,4,2,-2]
// 2-1 = 1 therefore [-1,-4,2,3]
// loop through to splice out all negatives. 
// add one to all remaining numbers to return missing 
// [5,4,6,7,9,3,10,9,5,6] => [1,2,8]

// SOLUTION 1
// function findAllDisappeared(nums){
//     for(var i = 0; i < nums.length; i++){
//         var index = Math.abs(nums[i]) - 1;
//         nums[index] = -Math.abs(nums[index]);
//     }

//     for(var j = nums.length -1; j >= 0; j--){
//         if(nums[j] < 0){
//             nums.splice(j,1);
//         }else{
//             nums[j] = j + 1;
//         }
//     }


//     return nums;
// }

//SOLUTION 2
//this solution creates an object with truthy values for each present number. 
//the second for loop goes through the obj and if !obj[i], meaning falsy or in this casing undefined, 
//the missing number is pushed to the returned array. 

// let findDisappeared  = function(nums){
//     let obj = {};
//     let missingNums = [];
//     for(let i = 0;i < nums.length; i++){
//         let num = nums[i]
//         obj[num] = true;
//     }
//     for(i = 1; i <= nums.length; i++){
//         if(!obj[i]){
//             missingNums.push(i)
//         }
//     }
//     console.log(obj)
//     return missingNums

// }


// console.log(findDisappeared([4,3,2,7,8,2,3,1]))
