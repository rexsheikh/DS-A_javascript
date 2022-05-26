//check in n and its double exist 


function double(arr){
    for(let i = 0; i < arr.length; i++){
        let target = arr[i];
        for(let j = i + 1; j < arr.length;j++){
            if(arr[j] === target * 2 || arr[j] === target/2){
                return true
            }
        }
    }
    return false
}

let test = [10,2,5,3]
console.log(double(test))

function double2(arr){
    let newSet = new Set();
    for(let i = 0; i < arr.length; i++){
        if(newSet.has(arr[i]/2) || newSet.has(arr[i] * 2)){
            return true
        }else{
            newSet.add(arr[i])
        }
    }
    return false
}

console.log(double2(test))