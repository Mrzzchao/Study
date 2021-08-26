/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 * 动态规划
 * dp[i][j]: 从grid[0][0]到grid[i][j]最小和
 * dp[i][j] = grid[i][j] + dp[i - 1][j]; j = 0;
 * dp[i][j] = grid[i][j] + dp[i][j - 1]; i = 0;
 * dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
 */
const minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const dp = Array.from(new Array(m), () => {
    return new Array(n).fill(0);
  });

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
      } else if (j === 0 && i !== 0) {
        dp[i][j] = grid[i][j] + dp[i - 1][j];
      } else if (i === 0 && j !== 0) {
        dp[i][j] = grid[i][j] + dp[i][j - 1];
      } else {
        dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m - 1][n - 1];
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = minPathSum;
// @after-stub-for-debug-end
