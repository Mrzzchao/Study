/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * dp[i][j]: 以坐标i,j结尾的路径数
 * dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
 * base case：左边和上边都是1
 */
const uniquePaths = function (m, n) {
  const dp = Array.from(new Array(m), (item) => {
    return new Array(n).fill(0);
  });
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};
// @lc code=end
