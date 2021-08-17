/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
  function getNum(str) {
    return +str || 0;
  }
  const num1Arr = num1.split('').reverse();
  const num2Arr = num2.split('').reverse();

  const n = Math.max(num1Arr.length, num2Arr.length);
  const sumArr = new Array(n).fill(0);
  let more = 0;

  for (let i = 0; i < n; i++) {
    const sum = getNum(num1Arr[i]) + getNum(num2Arr[i]) + more;
    sumArr[i] = sum % 10;
    more = Math.floor(sum / 10);
  }

  if (more) {
    sumArr.push(more);
  }

  return sumArr.reverse().join('');
};
// @lc code=end
