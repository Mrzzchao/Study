/**
 * @param {number[][]} grid
 * @return {number}
 * 动态规划
 * dp[i][j]: 走到grid[i][j]位置，能拿到的最大价值
 * dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
 * grid[i][j]的位置可能是从上面[i - 1][j]或者[i][j - 1]的位置过来。判断他们谁的价值大，就从谁那里过来
 * base case:
 * dp[0 - i][0] = sum(grid[0...i][0]) 左边的每一个点都等于上面点的和
 * dp[0][0...j] = sum(grid[0][0...j]) 上边的每一个点都等于左面点的和
 */
const maxValue = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  // 直接两个new的话会有同一个引用的问题
  const dp = Array.from(new Array(m), () => new Array(n).fill(0));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = grid[i][0] + dp[i - 1][0];
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = grid[0][j] + dp[0][j - 1];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
};

maxValue([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
