/**
 * https://leetcode-cn.com/problems/reverse-string/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 递归的方法
 * 1. 定义一个helper函数，作用是
 *  i.交换s[start]、s[end]
 *  ii. 继续递归剩余的s(start + 1, end - 1)的字符串
 * 2. base case是start >= end
 *
 */
const reverseString = function (s) {
  function helper(start, end, s) {
    if (start >= end) return;

    const tmp = s[start];
    s[start] = s[end];
    s[end] = tmp;

    helper(start + 1, end - 1, s);
  }

  helper(0, s.length - 1, s);
};

const result = reverseString('123456');

console.log(result);
