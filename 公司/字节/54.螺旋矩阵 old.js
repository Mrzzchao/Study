/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 给一个递归函数helper(rStart, rEnd, cStart, cEnd)
 * 传入的是一个矩阵的边界
 * 那蛇形就是，遍历完该矩阵的边界以后，再递归遍历helper(rStart + 1, rEnd - 1, cStart + 1, cEnd - 1)
 * 递归结束边界是if(rStart >= rEnd || cStart >= cEnd)
 */
const spiralOrder = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return [];
  const result = [];
  function helper(rStart, rEnd, cStart, cEnd) {
    if (rStart > rEnd || cStart > cEnd) {
      return;
    }
    // 只有一行
    if (rStart === rEnd) {
      for (let j = cStart; j <= cEnd; j++) {
        result.push(matrix[rStart][j]);
      }
      return;
    }
    // 只有一列
    if (cStart === cEnd) {
      for (let i = rStart; i <= rEnd; i++) {
        result.push(matrix[i][cStart]);
      }
      return;
    }

    let i = rStart;
    let j = cStart;
    // 上边遍历
    while (j <= cEnd) {
      result.push(matrix[i][j]);
      j++;
    }
    // 恢复到边界
    j--;

    // 右边遍历
    i++;
    while (i <= rEnd) {
      result.push(matrix[i][j]);
      i++;
    }
    i--;

    j--;
    // 下边遍历，避免只有一行的情况
    while (j >= cStart) {
      result.push(matrix[i][j]);
      j--;
    }
    j++;

    i--;
    // 左边遍历,到左上角下移一格停止
    while (i >= rStart + 1) {
      result.push(matrix[i][j]);
      i--;
    }

    helper(rStart + 1, rEnd - 1, cStart + 1, cEnd - 1);
  }

  helper(0, matrix.length - 1, 0, matrix[0].length - 1);

  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = spiralOrder;
// @after-stub-for-debug-end
