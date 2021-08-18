/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 递归
 * 如果遇到边界或者已经访问的就终止
 */
const spiralOrder = function (matrix) {
  const rEnd = matrix.length;
  const cEnd = matrix[0].length;
  const visited = Array.from(new Array(rEnd).fill(false), (item) => {
    return new Array(cEnd).fill(false);
  });
  const result = [];
  function dfs(matrix, r, c) {
    if (r < 0 || r >= rEnd || c < 0 || c >= cEnd || visited[r][c]) {
      return;
    }
    result.push(matrix[r][c]);
    visited[r][c] = true;

    // 左边优先向上，要不是可能就右拐了
    if (c === 0 || visited[r][c - 1]) {
      dfs(matrix, r - 1, c);
    }

    dfs(matrix, r, c + 1);
    dfs(matrix, r + 1, c);
    dfs(matrix, r, c - 1);
    dfs(matrix, r - 1, c);
  }

  dfs(matrix, 0, 0);

  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = spiralOrder;
// @after-stub-for-debug-end
