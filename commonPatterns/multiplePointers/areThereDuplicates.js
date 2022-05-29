//implement a function called areThereDuplicates
// which accepts a variable number of arguments and checks
//whether there are ny duplicats among the arguments passed in.
//Note:this can be solve with either frequency counter or the multiple pointers
//pattern. THIS SOLUTION USES MULTIPLE POINTERS

function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 2));
