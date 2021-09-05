/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function (nums) {
  if (nums.length < 2) return nums;

  const target = nums[0];

  const left = [];
  const right = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < target) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return sortArray(left).concat([target], sortArray(right));
};
// @lc code=end
