/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * dp[i]: 以nums[i]结尾的
 */
const longestConsecutive = function (nums) {
  const map = {};

  let max = 0;
  nums.forEach((num) => {
    map[num] = 1;
  });

  Object.keys(map).forEach((x) => {
    if (!map[x - 1]) {
      let y = +x;
      while (map[y + 1]) {
        y++;
      }
      max = Math.max(max, y - x + 1);
    }
  });

  return max;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = longestConsecutive;
// @after-stub-for-debug-end
