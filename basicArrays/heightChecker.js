//return the number of indices where heighs[i] != expected[i]

function heightChecker(nums){
    var sorted = nums.slice();
    console.log(sorted);
    sorted = sorted.sort((a,b) => a-b);
    var count = 0; 
    for(var i = 0; i < nums.length; i++){
        if(nums[i] !== sorted[i]){
            count++
        }
    }
    return count;
}

console.log(heightChecker([1,1,4,2,1,3]));