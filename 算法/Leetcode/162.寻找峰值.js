/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function (nums) {
  const max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    const prev = i === 0 ? Number.MIN_SAFE_INTEGER : nums[i - 1];
    const curr = nums[i];
    const next = i === nums.length - 1 ? Number.MIN_SAFE_INTEGER : nums[i + 1];

    if (curr > prev && curr > next) {
      console.log(nums[i]);
      console.log(nums[507]);

      return i;
    }
  }

  return 0;
};
// @lc code=end
