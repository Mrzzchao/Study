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
 * 动态规划
 * dp[i][j]: text1[0...i - 1] text2[0...j - 1]最长公共子序列
 * 状态转移方程：
 * text1[i - 1] === text2[j - 1]: dp[i][j] = dp[i - 1][j - 1] + 1;
 * text1[i - 1] !== text2[j - 1]: dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
 * base case: 就是找不到能匹配的dp[0...n][0...m] = 0
 */
const longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        // 相等就取前面子串的长度+1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // 如果不相等，取三种子串中最大的
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
};
// @lc code=end

longestCommonSubsequence('abcde', 'ace');
