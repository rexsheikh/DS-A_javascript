//anagram checker

function isAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let lookup = {};

  for (let i = 0; i < arr1.length; i++) {
    let letter = arr1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let j = 0; j < arr2.length; j++) {
    let check = arr2[j];
    if (!lookup[check]) {
      return false;
    } else {
      lookup[check] -= 1;
    }
  }
  return true;
}
