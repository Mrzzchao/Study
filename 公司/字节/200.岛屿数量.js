/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 * 深度优先遍历
 * 遍历整个二维数组，如果遇到1时，这时候就看看他的上下左右有没有1的
 * 有的话就移动过去，然后继续看，直到上下左右都没有1就算结束
 * 并且经过的节点要置为0，避免重复计算。
 * 最后递归几次，就有几个区域
 */
const numIslands = function (grid) {
  const rEnd = grid.length - 1;
  const cEnd = grid[0].length - 1;
  let count = 0;
  function dfs(grid, r, c) {
    grid[r][c] = '0';

    if (r + 1 <= rEnd && grid[r + 1][c] == 1) {
      dfs(grid, r + 1, c);
    }
    if (r - 1 >= 0 && grid[r - 1][c] == 1) {
      dfs(grid, r - 1, c);
    }
    if (c + 1 <= cEnd && grid[r][c + 1] == 1) {
      dfs(grid, r, c + 1);
    }
    if (c - 1 >= 0 && grid[r][c - 1] == 1) {
      dfs(grid, r, c - 1);
    }
  }

  for (let i = 0; i <= rEnd; i++) {
    for (let j = 0; j <= cEnd; j++) {
      if (grid[i][j] == 1) {
        dfs(grid, i, j);
        count++;
      }
    }
  }

  return count;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = numIslands;
// @after-stub-for-debug-end
