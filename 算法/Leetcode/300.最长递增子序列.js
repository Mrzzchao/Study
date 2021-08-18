/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * dp[i]: 以nums[i]结尾的最长上升序列
 *
 */
const lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = lengthOfLIS;
// @after-stub-for-debug-end
