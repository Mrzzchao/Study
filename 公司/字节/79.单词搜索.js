/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  const rEnd = board.length - 1;
  const cEnd = board[0].length - 1;

  function handlerCanRoad(row, col, index) {
    const pool = [
      [row, col - 1],
      [row, col + 1],
      [row + 1, col],
      [row - 1, col],
    ];

    return pool.some((item) => {
      return dfs(item[0], item[1], index);
    });
  }

  function dfs(row, col, index) {
    if (index === word.length) {
      return true;
    }
    if (row < 0 || row > cEnd || col < 0 || col > rEnd) {
      return false;
    }
    if (board[row][col] === word[index]) {
      return handlerCanRoad(row, col, index + 1);
    }

    return handlerCanRoad(row, col, index);
  }

  return dfs(0, 0, 0);
};
// @lc code=end
