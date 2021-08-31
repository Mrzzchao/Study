/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * 滑动窗口 窗口内和为sum，左边为left，右边为right
 * 1. 如果sum<target right++;
 * 2. 如果sum>target left++
 * 3. 记录窗口大小 min = Math.min(right - left, min);
 * 边界：right === nums.length - 1 && sum > target;
 */
const minSubArrayLen = function (target, nums) {
  if (nums[0] >= target) return 1;
  let left = 0;
  let right = 0;
  let sum = nums[0];
  let min = Infinity;

  while (left <= right && right <= nums.length - 1) {
    if (sum < target) {
      sum = sum + nums[++right];
    } else if (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum = sum - nums[left++];
    }
  }

  return min === Infinity ? 0 : min;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = minSubArrayLen;
// @after-stub-for-debug-end
