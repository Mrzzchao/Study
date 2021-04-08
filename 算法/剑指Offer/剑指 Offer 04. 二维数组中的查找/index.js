/**
 * https://leetcode-cn.com/leetbook/read/illustrate-lcof/xs5w4d/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 以左下角为坐标轴
 * target < 坐标轴 坐标右移
 * target > 坐标轴 坐标上移
 */
// @lc code=start
const findNumberIn2DArray = function (matrix, target) {
  if (!matrix.length) return false;
  let x = matrix.length - 1;
  let y = 0;
  while (x >= 0 && y < matrix[0].length) {
    if (matrix[x][y] === target) {
      return true;
    }
    if (matrix[x][y] > target) {
      x = x - 1;
    } else {
      y = y + 1;
    }
  }
  return false;
};

const matrix = [
  [1, 4],
  [2, 5],
];
const target = 2;

console.log(findNumberIn2DArray(matrix, target));
