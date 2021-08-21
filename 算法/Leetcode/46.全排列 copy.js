/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 回溯算法做
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
      const num = nums[i];
      track.push(num);
      useMap[i] = true;
      backtrack();
      track.pop();
      useMap[i] = false;
    }
  }

  backtrack(0);

  return result;
};
// @lc code=end
