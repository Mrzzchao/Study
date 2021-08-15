/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * 路径：递归时遇到的数字
 * 选择：递归的数组
 * 结束条件：当前数组为空
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const result = [];
  const track = [];
  const useMap = {};

  function backtrack() {
    if (track.length === nums.length) {
      result.push([...track]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (useMap[i]) continue;
      useMap[i] = true;
      track.push(nums[i]);
      backtrack();
      track.pop();
      useMap[i] = false;
    }
  }
  backtrack();
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = permute;
// @after-stub-for-debug-end
