/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 1. 从小到大排序
 * 2. 设置指针L：i+1；R：len - 1；代表nums[i]数字后面的边界
 * 3. 如果
 * nums[L] + nums[R] + nums[i] === 0 则满足，
 * nums[L] + nums[R] + nums[i] < 0 L++
 * nums[L] + nums[R] + nums[i] > 0 R--
 */
const threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  if (nums === null || nums.length < 3) return [];

  const result = [];
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    const num = nums[i];
    if (num > 0) break;

    if (i > 0 && num === nums[i - 1]) continue;

    let L = i + 1;
    let R = len - 1;

    while (L < R) {
      const sum = nums[L] + nums[R] + num;
      if (sum === 0) {
        result.push([nums[L], nums[R], num]);
        while (nums[L] === nums[L + 1] && L < R) {
          L++;
        }
        while (nums[R] === nums[R - 1] && L < R) {
          R--;
        }

        L++;
        R--;
      } else if (sum < 0) {
        L++;
      } else {
        R--;
      }
    }
  }

  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end
