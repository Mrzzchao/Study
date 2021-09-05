/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  let row = matrix.length - 1;
  let col = 0;

  const rEnd = matrix.length - 1;
  const cEnd = matrix[0].length - 1;

  while (row >= 0 && col <= cEnd) {
    const curr = matrix[row][col];

    if (curr === target) {
      return true;
    }
    if (curr > target) {
      row--;
    } else {
      col++;
    }
  }

  return false;
};
// @lc code=end
