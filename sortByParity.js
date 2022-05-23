//given an integer array, move all the even integers at the 
// of the array followed by all the odd integers. 

function sortByParity(nums){
    var even = [];
    var odd = [];
    for(var i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            even.push(nums[i]);
        }else{
            odd.push(nums[i]);
        }
    }
    return even.concat(odd);
}

console.log(sortByParity([3,1,2,4,]));