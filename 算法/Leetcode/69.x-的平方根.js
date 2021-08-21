/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  const start = 0;
  let num = 0;
  let pre = num;
  while (start < x) {
    const s = num * num;
    if (s > x) {
      return pre;
    }
    if (s === x) {
      return num;
    }

    pre = num;
    num++;
  }

  return num;
};
// @lc code=end
