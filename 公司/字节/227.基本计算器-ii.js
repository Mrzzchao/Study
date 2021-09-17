/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const calculate = function (s) {
  s = s.replace(' ', '');

  const result = s.split('').reduce(
    (prev, curr) => {
      const { can, left, right, op } = prev;
      if (prev.can) {
        const result = new Function(`return ${left}${op}${right}`)();
        return {
          can: false,
          left: result,
          right: '',
          op: curr,
        };
      }
      if (!left) {
        prev.left = curr;
        return prev;
      }
      if (!op) {
        prev.op = curr;
        return prev;
      }
      if (!right) {
        prev.right = curr;
        prev.can = true;
        return prev;
      }

      return prev;
    },
    {
      can: false,
      left: '',
      right: '',
      op: '',
    }
  );
  return result.left;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = calculate;
// @after-stub-for-debug-end
