function getDigit(num) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function numDigits(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigits(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, numDigits[arr[i]]);
  }
  return max;
}
