/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 栈的方式
 * s     )  ( ) ( ) )
 * stack -1 0 1 2 3 4
 */
const longestValidParentheses = function (s) {
  // 为了让最后一个未匹配的右括号能入栈，然后作为一段的参照系
  const stack = [-1];
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      // 弹出一个左括号
      stack.pop();
      if (stack.length === 0) {
        // 说明当前s[i]就是一个未匹配的右括号了
        stack.push(i);
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }
  return max;
};
// @lc code=end
