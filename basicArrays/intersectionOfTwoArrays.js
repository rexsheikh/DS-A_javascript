// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
var intersection = function (nums1, nums2) {
  let lookup = {};
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    lookup[nums1[i]] ? (lookup[nums1[i]] += 1) : (lookup[nums1[i]] = 1);
  }
  for (let j = 0; j < nums2.length; j++) {
    if (lookup[nums2[j]] && !res.includes(nums2[j])) {
      res.push(nums2[j]);
    }
  }
  return res;
};
