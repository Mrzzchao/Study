/**
 * @param {number} n
 * @return {number}
 * dp[i]: 台阶为i时的跳法数
 * base case: dp[0] = 1; dp[1] = 1; dp[2] = 2
 * 状态选择：可以跳一步或者两步所以dp[i] 取决于dp[i - 1]和dp[i - 2]
 * 状态转移方程：dp[i] = dp[i - 1] + dp[i - 2]
 */
const numWays = function (n) {
  const dp = [1, 1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

console.log(numWays(20));
