/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * dp[i][j]: s[i...j]中最长回文串的长度。
 * 状态：i和j
 * 选择：子串的选择
 * 状态转移公式
 * s[i] = s[j]:dp[i][j] = dp[i + 1][j - 1] + 2; 就是他们子串最大回文长度+当前两个字符
 * s[i] != s[j]: dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
 *
 * base case: dp[i][i] = 1; 0 <= i < s.length; 也就是所有单字符都是回文串
 */
const longestPalindromeSubseq = function (s) {
  const n = s.length;
  const dp = new Array(n);

  // base case
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(0);
    dp[i][i] = 1;
  }

  // 由于是依赖i+1,j-1。所以i从尾部开始。j从i开始，因为j需要大于i
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][n - 1];
};
// @lc code=end
