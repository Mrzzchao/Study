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
const maxValue = function (grid) {};
