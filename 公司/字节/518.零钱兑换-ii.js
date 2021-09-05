/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 * dp[i]：金额为i的组合数
 * dp[i] = dp[i] + dp[i - coins[j]]; coins[j] <= i;
 * base case: dp[0] = 1
 */
const change = function (amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let j = 0; j < coins.length; j++) {
    for (let i = coins[j]; i <= amount; i++) {
      dp[i] = dp[i] + dp[i - coins[j]];
    }
  }

  return dp[amount];
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = change;
// @after-stub-for-debug-end
