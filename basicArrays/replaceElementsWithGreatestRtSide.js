//given an array arr, replace every element in that array with the 
//greatest element among the elements to its right, and replace the last 
//element with -1. 

//input arr = [17,18,5,4,6,1]
//output arr = [18,6,6,6,1,-1]

//to get the largest element on the right side, we can look at less elements 

function replaceElements(arr){
    var length = arr.length; //length variable for cleaner code. 
    var maxRight = arr[length-1]; //initialize maxRight to 1
    arr[length -1] = -1; //assign the last element to -1
    for(var i = length - 2; i >= 0; i--){
      var current = arr[i]; //i is initilized to the second to last element. //6
      arr[i] = maxRight; //changes the array to the maxRight. // 1
      if(maxRight < current){ //changes maxRight if it is less than current //1 => 6 
        maxRight = current;
  }
  }
    return arr;
  }
  
  console.log(replaceElements([17,18,5,4,6,1])) 
  //=> [18,6,6,6,1,-1]