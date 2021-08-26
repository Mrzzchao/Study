/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 回溯算法
 * 选择：选当前数字、不选当前数字
 * 路径：
 */
const subsets = function (nums) {
  const result = [];
  const track = [];

  function backtrack(index) {
    if (index === nums.length) {
      result.push([...track]);
      return;
    }

    // 选择当前数字
    track.push(nums[index]);
    backtrack(index + 1);

    // 不选当前数字
    track.pop();
    backtrack(index + 1);
  }

  backtrack(0);

  return result;
};
// @lc code=end
