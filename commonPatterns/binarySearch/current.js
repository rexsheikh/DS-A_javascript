//searchRotatedArray

function searchRotatedArray(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) return mid;
    if (arr[left] <= target) {
      if (arr[left] <= target && target <= arr[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (arr[mid] <= target && target <= arr[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}
