/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  s = s.trim();

  return s
    .split(' ')
    .filter((_) => _)
    .map((item) => {
      return item.trim();
    })
    .reverse()
    .join(' ');
};
// @lc code=end
