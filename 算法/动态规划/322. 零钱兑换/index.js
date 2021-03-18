/**
 * https://leetcode-cn.com/problems/coin-change/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 动态规划
 * 1.base case：amount = 0
 * 2.状态：只有金额会变 所有也是amount
 * 3.选择-就是导致状态变化的行为：要使金额变化，那就是要拿走钱币，所以是coins
 * 4.dp[n]：dp[n]=金额为n，需要最少的钱币数量
 */
const coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  // base case
  dp[0] = 0;

  for (let i = 0; i <= amount; i++) {
    coins.forEach((coin) => {
      if (i - coin >= 0) {
        // dp[i] 为dp[i]与i-coin金额的金币数量加上coin这一枚
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    });
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
