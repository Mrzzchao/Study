/**
 * https://leetcode-cn.com/problems/fibonacci-number/
 * @param {number} n
 * @return {number}
 * 动态规划
 * 1.base case： f(n) = 1。n=1,2；
 * 2.状态(原问题和子问题中变化的量)：只有n是变化的
 * 3.dp[i]：代表n=i时的值，所以dp[0]、dp[1] = 1;
 */
const fib = function (n) {
  if (n <= 0) return 0;
  const dp = [1, 1];

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[dp.length - 1];
};

// 其实就两个状态，当前值和上一个值，所以可以状态压缩
const fib2 = function (n) {
  if (n < 1) return 0;
  let pre = 1;
  let curr = 1;
  let next;

  for (let i = 3; i <= n; i++) {
    next = pre + curr;
    pre = curr;
    curr = next;
  }

  return curr;
};
