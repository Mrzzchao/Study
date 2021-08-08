/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  nums = nums.sort((a, b) => b - a);

  return nums[k - 1];
};

const s1 = [3, 2, 1, 5, 6, 4];
const s2 = 2;
const result = findKthLargest(s1, s2);
console.log(result);
