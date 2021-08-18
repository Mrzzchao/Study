/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = {};
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const sub = target - num;
    if (map[num] >= 0) {
      result.push(map[num], i);
    }
    map[sub] = i;
  }

  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end
