/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
  function getNum(str) {
    if (str) return +str;

    return 0;
  }
  let more = 0;
  const num1Arr = num1.split('').reverse();
  const num2Arr = num2.split('').reverse();

  const result = [];
  let n = num1Arr.length;
  if (n < num2Arr.length) {
    n = num2Arr.length;
  }

  for (let i = 0; i < n; i++) {
    const sum = (getNum(num1Arr[i]) + getNum(num2Arr[i]) + more) % 10;
    more = Math.floor((getNum(num1Arr[i]) + getNum(num2Arr[i]) + more) / 10);

    result[i] = sum;
  }

  if (more === 1) {
    result[n] = 1;
  }

  return result.reverse().join('');
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = addStrings;
// @after-stub-for-debug-end
