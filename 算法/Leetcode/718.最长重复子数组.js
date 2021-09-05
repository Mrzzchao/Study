/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * dp[i][j]：A[i:]与B[j:]中的最长公共前缀数
 */
const findLength = function (nums1, nums2) {
  const dp = Array.from(new Array(nums1.length + 1), () => {
    return new Array(nums2.length + 1).fill(0);
  });

  let max = 0;

  for (let i = nums1.length - 1; i >= 0; i--) {
    for (let j = nums2.length - 1; j >= 0; j--) {
      if (nums1[i] === nums2[j]) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
        max = Math.max(dp[i][j], max);
      }
    }
  }

  return max;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = findLength;
// @after-stub-for-debug-end
