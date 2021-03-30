/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * dp[i]: 以nums[i]结尾连续的最大和
 * base case: dp[0] = nums[0]
 * 状态转移公式：dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
 */
const maxSubArray = function (nums) {
  // base case
  const dp = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
  }

  return Math.max(...dp);
};
// @lc code=end
