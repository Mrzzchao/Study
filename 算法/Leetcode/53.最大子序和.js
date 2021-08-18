/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * dp: 以i结尾的最大子序和
 * dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
 * base case: dp[0] = nums[0]
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  const dp = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
  }

  return Math.max(...dp);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxSubArray;
// @after-stub-for-debug-end
