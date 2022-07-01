function findPeakElement(arr) {
  let right = arr.length - 1;
  let left = 0;
  let mid;
  while (left < right) {
    mid = Math.floor(left + right / 2);
    if (arr[mid] > arr[mid + 1]) right = mid;
    else left = mid + 1;
  }
  return left;
}

//[1,2,3,1] => 2, index of peak element
//(element that is greater than left and right neighbors)

console.log(findPeakElement([1, 2, 1, 3, 4, 5]));

let arr = [1, 2, 1, 3, 4, 5];
console.log(arr[-1]);
