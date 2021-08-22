/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * dp[i]: 金额为i需要的最少钱币数量
 * dp[i] = Math.min(dp[i - coin] + 1, dp[i]); 循环coins, coin <= i时
 * base case: dp[0] = 0;
 */
const coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      if (coin <= i) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = coinChange;
// @after-stub-for-debug-end
