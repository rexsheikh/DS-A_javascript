// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

function validParentheses(str) {
  let stack = [];
  let compliment = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (char of str) {
    if (!compliment[char]) {
      stack.push(char);
    } else if (stack.pop() !== compliment[char]) {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(validParentheses("()[]{}"));
