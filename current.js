//find peak element

function findPeakElement(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left + 1 < right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] >= nums[mid + 1]) {
      right = mid;
    } else {
      left = mid;
    }
    if (nums[left] > nums[right]) {
      return left;
    } else {
      return right;
    }
  }
}
