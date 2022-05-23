//you are given integer arrays 1 and 2 sorted in 
//non-decreasing order. final sorted array should
//not be returned by the function but instead be stored 
//inside the array nums1. 

let nums1 = [1,2,3,0,0,0]
let m = 3
let n = 3
let nums2 = [2,5,6]
// output : nums1 = [1,2,2,3,5,6]
//SOLUTION 1
//Look at each array backwards, comparing the end numbers
//and making swaps if necessary. 
function merge(nums1,m,nums2,n){
    let first = m - 1; //2
    let second = n - 1; //2
    let i = nums1.length - 1; //5

    while(second >= 0){
        let fVal = nums1[first];
        let sVal = nums2[second];

        if(fVal > sVal){
            nums1[i] = fVal;
            i--;
            first--;
        }else{
            nums1[i] = sVal;
            i--;
            second--;
        }
    }
    return nums1
}

console.log(merge(nums1,m,nums2,n))


//SOLUTION 2
//splice in a destructured nums2

function merge(nums1,m,nums2,n){
    nums1.splice(m,n,...nums2);
    nums1.sort((a,b) => a - b);
    return nums1
}