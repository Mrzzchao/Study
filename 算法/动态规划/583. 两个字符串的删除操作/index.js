/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * 动态规划
 * dp[i][j]: word1[0...i]与word2[0...j]的最小删除操作
 * 状态: i和j的变化
 * 选择: 删除word1[i] 删除word2[j]
 * 状态转移方程
 * word1[i] !== word2[j]: dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1
 * dp[i - 1][j] 删除word1[i]
 * dp[i][j - 1] 删除word2[j]
 * dp[i - 1][j - 1] 删除word1[i]、删除word2[j] 这个就不用了。1 前两个包含了。2.删除两个一定最大。3.还可以避免两个单字符的对比
 *
 * base case dp[0][j] = j dp[i][0] = i
 */
const minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n);
  }

  // base case：dp[0][0]:就是0,dp[0][j] j有多少个就删除多少个，dp[i][0]同理
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] !== word2[j - 1]) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      } else {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[m][n];
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = minDistance;
// @after-stub-for-debug-end
