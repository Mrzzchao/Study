/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 滑动窗口
 * left 如果有相等的右移
 * right 如果没有相等的右移
 * right - left 就是当前没有重复的长度
 */
const lengthOfLongestSubstring = function (s) {
  const map = new Map();

  let left = 0;
  let right = 0;
  let max = 0;

  // 还没走到结尾
  while (left < s.length) {
    while (right < s.length && !map.get(s[right])) {
      map.set(s[right], 1);
      right++;
    }

    max = Math.max(max, right - left);
    map.delete(s[left]);
    left++;
  }

  return max;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end
