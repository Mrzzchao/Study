/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * dp[i]: 以nums[i]结尾的最大连续乘积
 * dpMin[i]: 以nums[i]结尾的最小连续乘积
 * base case: dp[0] = nums[0]
 * 状态转移: dp[i] = Math.max(nums[i], nums[i] * dp[i - 1])
 * 但是发现有个问题，如果遇到nums[i]为负数的情况，就不会计算。但是两个负数相乘就会更大
 * 所以新的状态转移方程：dp[i] = Math.max(nums[i], nums[i] * dp[i - 1], nums[i] * dpMin[i - 1])
 */
const maxProduct = function (nums) {
  // base case
  const dp = [nums[0]];
  const dpMin = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], nums[i] * dp[i - 1], nums[i] * dpMin[i - 1]);
    dpMin[i] = Math.min(nums[i], nums[i] * dp[i - 1], nums[i] * dpMin[i - 1]);
  }

  return Math.max(...dp);
};
// @lc code=end
