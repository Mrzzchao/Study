/**
 * @param {number} n
 * @return {number}
 * 动态规划
 * 其实会发现每一个丑数都是2、3、5的倍数，那只需要对比他们倍数的大小，按从小到大排序就好
 * dp[i]: 第i个丑数
 * 设置dp[a]*2 a表示2倍数字的索引。dp[b]*3 b表示3倍数字的索引。dp[c]*5 c表示5倍数字的索引。
 * dp[i] = Math.min(dp[a]*2, dp[b]*3, dp[c]*5)
 * base case: dp[0] = 1
 *
 */
const nthUglyNumber = function (n) {
  let a = 0;
  let b = 0;
  let c = 0;

  const dp = [1];

  for (let i = 1; i <= n; i++) {
    const s2 = dp[a] * 2;
    const s3 = dp[b] * 3;
    const s5 = dp[c] * 5;
    dp[i] = Math.min(s2, s3, s5);

    if (dp[i] === s2) {
      a++;
    }
    if (dp[i] === s3) {
      b++;
    }
    if (dp[i] === s5) {
      c++;
    }
  }

  return dp[n - 1];
};
