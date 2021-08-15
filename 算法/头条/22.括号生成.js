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
  const selectArr = [];
  const track = [];
  for (let i = 0; i < n; i++) {
    selectArr.push('(', ')');
  }

  function backtrack(startIndex) {
    for (let i = 0; i < selectArr.length; i++) {
      const select = selectArr[i];

      if (i === index) continue;
      if (track.length === 0 && select === ')') continue;

      track.push(select);
    }
  }
};
// @lc code=end
