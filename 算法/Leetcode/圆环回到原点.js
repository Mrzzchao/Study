/**
 * 圆环上有10个点，编号为0~9。从0点出发，每次可以逆时针和顺时针走一步
 * 问走n步回到0点共有多少种走法。
 * @param {*} n
 * dp[i][j]，走i步到j的位置，有多少种走法
 */

function backToOrigin(n, length) {
  const dp = Array.from(new Array(n + 1), (item) => {
    return new Array(length).fill(0);
  });

  dp[0][0] = 1;
  dp[1][1] = 1;
  dp[1][length - 1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= 9; j++) {
      // j-1+length是防止j-1=-1
      // %length防止j-1+length或者j+1超过数组大小，绕一圈
      dp[i][j] = dp[i - 1][(j - 1 + length) % length] + dp[i - 1][(j + 1) % length];
    }
  }
  return dp[n][0];
}

console.log(backToOrigin(2, 10));
