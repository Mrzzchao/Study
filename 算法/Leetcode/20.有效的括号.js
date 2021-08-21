/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const sArr = s.split('');
  const stack = [];

  for (let i = 0; i < sArr.length; i++) {
    if (map[sArr[i]]) {
      stack.push(sArr[i]);
    } else {
      const match = stack.pop();
      if (map[match] !== sArr[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end
