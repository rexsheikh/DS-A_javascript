var mySqrt = function (x) {
  let left = 1;
  let right = x;
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

var mySqrt = function (x) {
  var left = 1;
  var right = Math.floor(x / 2) + 1;
  var mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};


