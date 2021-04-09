/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 整体思路：循环遍历整个数组，循环中再嵌套四个循环，分别是从左至右，从上至下，从右至左，从下至上这几个方向，按照题意将整个数组遍历完成，控制好边界
 * 题目中 matrix 有可能为空，直接返回空数组即可
  初始化边界 left、right、top、bottom 四个值，初始化结果数组 res 和数组下标 x
  按照遍历方向循环取出数字放入结果数组中
  从左至右：遍历完成后 ++top，如果 top > bottom​，到达边界循环结束
  从上至下：遍历完成后 --right，如果 left > right​，到达边界循环结束
  从右至左：遍历完成后 --bottom，如果 top > bottom​，到达边界循环结束
  从下至上：遍历完成后 ++left，如果 left > right​，到达边界循环结束

 */
const spiralOrder = function (matrix) {
  if (matrix.length == 0) return [];
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  let x = 0;
  const res = [];
  while (true) {
    for (let i = left; i <= right; i++) res[x++] = matrix[top][i];
    if (++top > bottom) break;
    for (let i = top; i <= bottom; i++) res[x++] = matrix[i][right];
    if (left > --right) break;
    for (let i = right; i >= left; i--) res[x++] = matrix[bottom][i];
    if (top > --bottom) break;
    for (let i = bottom; i >= top; i--) res[x++] = matrix[i][left];
    if (++left > right) break;
  }
  return res;
};
