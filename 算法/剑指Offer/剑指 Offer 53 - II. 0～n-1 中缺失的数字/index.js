/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) return i;
  }
};
