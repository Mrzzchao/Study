/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 * 其实就是
 * 1. 找到下表为n - 1的字符
 * 2. 然后将s[n - 1...s.length]的字符串移动到字符串首部就好
 */
const reverseLeftWords = function (s, n) {
  const leftStr = s.slice(0, n);
  const rightStr = s.slice(n);

  return rightStr + leftStr;
};

reverseLeftWords('abcdefg', 2);
