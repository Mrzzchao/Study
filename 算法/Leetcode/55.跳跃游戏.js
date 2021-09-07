/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  let maxPos = 0;
  let end = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxPos = Math.max(maxPos, nums[i] + i);

    if (i === end) {
      end = maxPos;
    }
  }

  return end >= nums.length - 1;
};
// @lc code=end
