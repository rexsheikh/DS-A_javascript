//implement a function called areThereDuplicates
// which accepts a variable number of arguments and checks
//whether there are any duplicates among the arguments passed in.
//solve in one line

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
