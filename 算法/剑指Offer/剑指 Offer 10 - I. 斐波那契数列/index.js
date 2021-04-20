/**
 * @param {number} n
 * @return {number}
 * 动态规划
 * base case： f(0) = 0; f(1) = 1
 * 状态转移方程：f(n) = f(n-1) + f(n-2)
 * dp[i]: n=i时的值
 * dp[0] = 0; dp[1] = 1;
 *
 * 因为状态就两个 所以可以做状态压缩。
 * 状态只有prev = sum(0...i - 1) curr = prev + i
 */
const fib = function (n) {
  if (n <= 0) return 0;
  const dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[dp.length - 1];
};
