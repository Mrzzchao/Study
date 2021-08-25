/*
 * @lc app=leetcode.cn id=1091 lang=javascript
 *
 * [1091] 二进制矩阵中的最短路径
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 * 广度优先算法来做
 */
const shortestPathBinaryMatrix = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) return -1;
  if (grid[0][0] === 1) return -1;
  // 已遍历的访问列表
  const visited = {
    '0-0': true,
  };

  // 记录待访问的节点
  const queue = [[0, 0]];

  const rEnd = grid.length - 1;
  const cEnd = grid[0].length - 1;

  let count = 0;

  // 获取下一步节点，会做访问筛选、边界筛选
  function getNextNodeList(row, col) {
    const pool = [
      [row, col + 1],
      [row, col - 1],
      [row + 1, col],
      [row + 1, col + 1],
      [row + 1, col - 1],
      [row - 1, col],
      [row - 1, col + 1],
      [row - 1, col - 1],
    ];

    return pool.filter((item) => {
      const [row, col] = item;

      if (visited[`${row}-${col}`]) {
        return false;
      }

      if (row < 0 || row > rEnd) {
        return false;
      }

      if (col < 0 || col > cEnd) {
        return false;
      }

      if (grid[row][col] === 1) {
        return false;
      }

      visited[`${row}-${col}`] = true;
      return true;
    });
  }

  while (queue.length) {
    const size = queue.length;

    count++;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      const [row, col] = node;
      if (row === rEnd && col === cEnd) {
        // 到达了终点，直接返回
        return count;
      }

      const nextNodeList = getNextNodeList(row, col);

      queue.push(...nextNodeList);
    }
  }
  return -1;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = shortestPathBinaryMatrix;
// @after-stub-for-debug-end
