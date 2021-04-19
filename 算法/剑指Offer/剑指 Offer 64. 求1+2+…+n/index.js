/**
 * @param {number} n
 * @return {number}
 * 递归
 * 子问题：sumNums(n-1)
 */
const sumNums = function (n) {
  return n && sumNums(n - 1) + n;
};
