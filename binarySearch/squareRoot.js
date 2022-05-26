var mySqrt = function (x) {
  let left = 1;
  let right = x;
  // The square root of 0 or 1 is itself
  if (x < 2) {
    return x;
  }
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left - 1;
};

let test = 10;
console.log(squareRoot(test, 3));
