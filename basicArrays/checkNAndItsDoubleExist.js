//given an array f integers, check if there
//exists two integers N and M such that N
// is the double of M. 

//arr = [10,2,5,3]
//check for double or half. get rid of elements as checked


//SOLUTION 1 : TWO FOR LOOPS
//TIME COMPLEXITY O(n^2)
//SPACE COMPLEXITY O(n)


let arr = [10,2,5,3];
console.log(double(arr))

//SOLUTION 2 : HASH TABLE 

function double2(arr){
    let newSet = new Set()
    for(let i = 0; i < arr.length; i++){
        if(newSet.has(arr[i]/2) || newSet.has(arr[i]*2)){
            return true
        }else{
            newSet.add(arr[i])
        }
    }
    return false
}


console.log(double2(arr))

