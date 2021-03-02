/**
 * 反转字符串
 * @param {string} s
 * @return {string}
 */
const reverseString = function (s) {
  return s.split('').reverse().join('');
};

const result = reverseString('hello');

console.log(result);
