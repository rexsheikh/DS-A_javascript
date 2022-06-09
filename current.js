//given an array of integers and a number, write a function called maxSubarraySum, which finds
//the maximum sum of a subarray with the length of the number passed to the function.
//([100,200,300,400],2) => 700

//SLIDING WINDOW

function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let j = num; j < arr.length; j++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}

//reviews today 08June
//bubble sort(unop)
