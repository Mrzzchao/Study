/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * f(n) = f(n - 1) + f(n - 2)
 * dp[i] = dp[i - 1] + dp[i - 2]
 */
const climbStairs = function (n) {
  const dp = [1, 2];

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n - 1];
};
// @lc code=end
