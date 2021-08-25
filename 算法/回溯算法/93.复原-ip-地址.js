/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
  if (s.length > 4 * 3) return [];
  const result = [];
  const track = [];

  function isValid(str) {
    if (/^0\d+/.test(str)) return false;
    const num = +str;
    return num >= 0 && num <= 255;
  }
  function backtrack(s) {
    if (!s) {
      if (track.length === 4) {
        result.push(track.join('.'));
      }
      return;
    }
    for (let i = 0; i < 3; i++) {
      const subStr = s.slice(0, i + 1);

      if (isValid(subStr)) {
        track.push(subStr);
        backtrack(s.slice(i + 1));
        track.pop();
      }
    }
  }

  backtrack(s);
  return [...new Set(result)];
};
// @lc code=end
