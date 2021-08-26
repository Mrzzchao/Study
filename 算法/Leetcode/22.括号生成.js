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
  let leftCount = 0;
  let rightCount = 0;

  function backtrack(str) {
    if (str.length === 2 * n) {
      result.push(str);
    }
    if (leftCount < n) {
      leftCount++;
      backtrack(`${str}(`);
      leftCount--;
    }
    if (leftCount > rightCount && rightCount < n) {
      rightCount++;
      backtrack(`${str})`);
      rightCount--;
    }
  }

  backtrack('');

  return result;
};
// @lc code=end
