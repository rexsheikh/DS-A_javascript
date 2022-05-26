//move zeroes to the right of the array while maintaining the order of the 
//other elements. 

//[0,1,0,3,12] => [1,3,12,0,0]

function moveZeroes(arr){
    let count = 0;
    for(var i = arr.length -1; i >= 0; i--){
        if(arr[i] === 0){
            arr.splice(i,1);
            count++;
        }
    }
    for(var j = 0;j < count; j++){
        arr.push(0);
    }
    return arr;
}

console.log(moveZeroes([0,1,0,3,12]))