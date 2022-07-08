//determine whether a given number is a valid perfect square in O(log n) time

var isPerfectSquare = function (num) {
  if (num < 2) {
    return true;
  }
  let left = 0;
  let right = num;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (mid * mid === num) {
      return true;
    } else if (mid * mid > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
