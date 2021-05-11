/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 * L[i]: nums[i]左边的乘积
 * R[i]: nums[i]右边的乘积
 * result[i] = L[i] * R[i]
 */
const productExceptSelf = function (nums) {
  const result = [];

  // nums[0] 左边没有数字
  const L = [1];
  for (let i = 1; i < nums.length; i++) {
    L[i] = L[i - 1] * nums[i - 1];
  }
  // 最后一个右边没有数字
  const R = new Array(nums.length);
  R[nums.length - 1] = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    R[i] = R[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] = L[i] * R[i];
  }

  return result;
};
// @lc code=end
