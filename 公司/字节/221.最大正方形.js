/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 * dp[i + 1][j + 1]: 以matrix[i][j]为右下角的最大正方形边长
 * dp[i + 1][j + 1] = Math.min(dp[i][j + 1], dp[i + 1][j], dp[i][j]) + 1；matrix[i][j] == 1
 */
const maximalSquare = function (matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const dp = Array.from(new Array(n + 1), (item) => {
    return new Array(m + 1).fill(0);
  });

  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == 1) {
        dp[i + 1][j + 1] = Math.min(dp[i][j + 1], dp[i + 1][j], dp[i][j]) + 1;
      }
      maxLen = Math.max(maxLen, dp[i + 1][j + 1]);
    }
  }

  return maxLen * maxLen;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maximalSquare;
// @after-stub-for-debug-end
