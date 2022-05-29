//implement a function called areThereDuplicates
// which accepts a variable number of arguments and checks
//whether there are ny duplicats among the arguments passed in.
//Note:this can be solve with either frequency counter or the multiple pointers
//pattern. THIS SOLUTION USES FREQUENCY COUNTER

function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 2));
