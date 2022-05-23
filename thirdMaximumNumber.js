function thirdMax(nums){
    nums.sort((a,b)=> a - b);
    let removeDuplicates = [];
    nums.map((el,index) => {
        if(removeDuplicates.includes(el) === false){
            removeDuplicates.push(el)
        }
    });
    if(removeDuplicates.length >= 3){
        return removeDuplicates[removeDuplicates.length -3];
    }else{
        return removeDuplicates.pop();
    }
}