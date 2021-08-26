/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const result = [];

  function backtrack(str, leftRemain, rightRemain) {
    if (str.length === 2 * n) {
      result.push(str);
    }

    if (leftRemain > 0) {
      backtrack(`${str}(`, leftRemain - 1, rightRemain);
    }

    if (leftRemain < rightRemain) {
      backtrack(`${str})`, leftRemain, rightRemain - 1);
    }
  }

  backtrack('', n, n);

  return result;
};
// @lc code=end
