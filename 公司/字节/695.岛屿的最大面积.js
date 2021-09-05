/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 * 深度优先遍历
 */
const maxAreaOfIsland = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let max = 0;
  let count = 0;
  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= m || y >= n) {
      return 0;
    }
    if (grid[x][y] === 1) {
      grid[x][y] = 0;
      count++;
      return toNext(x, y);
    }
    return 0;
  }

  function toNext(row, col) {
    const pool = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    pool.forEach((item) => {
      dfs(row + item[0], col + item[1]);
    });
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const node = grid[i][j];
      if (node === 1) {
        dfs(i, j, 0);
        max = Math.max(max, count);
        count = 0;
      }
    }
  }

  return max;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxAreaOfIsland;
// @after-stub-for-debug-end
