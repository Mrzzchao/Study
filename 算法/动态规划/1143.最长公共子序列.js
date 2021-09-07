/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * dp[i][j]: text1[0...i]与text2[0...j]的最长公共子序列
 * dp[i][j] = dp[i - 1][j - 1] + 1; text1[i] === text2[j]
 * dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
 * base case: dp[i][j] = 0;
 */
const longestCommonSubsequence = function (text1, text2) {
  const n = text1.length;
  const m = text2.length;
  const dp = Array.from(new Array(n + 1), () => {
    return new Array(m + 1).fill(0);
  });

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[n][m];
};
// @lc code=end
