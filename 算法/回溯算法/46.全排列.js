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

  function backtrack(nums = [], track = []) {
    // 结束条件，遍历完了
    if (nums.length === 0) {
      result.push([...track]);
    }

    // 遍历选择列表
    for (let i = 0; i < nums.length; i++) {
      // 做选择
      const num = nums[i];
      track.push(num);
      const newArr = [...nums.slice(0, i), ...nums.slice(i + 1)];

      // 推荐
      backtrack(newArr, track);
      // 撤销选择
      track.pop();
    }
  }

  backtrack(nums, []);

  return result;
};

const permute2 = function (nums) {
  const result = [];
  const track = [];
  const useMap = {};

  function backtrack(index, track = []) {
    // 结束条件，遍历完了
    if (nums.length === index) {
      result.push([...track]);
    }

    // 遍历选择列表
    for (let i = 0; i < nums.length; i++) {
      if (useMap[i]) continue;
      // 做选择
      const num = nums[i];
      track.push(num);
      useMap[i] = true;
      // 推荐
      backtrack(index++, track);
      // 撤销选择
      track.pop();
      useMap[i] = false;
    }
  }

  backtrack(nums, []);

  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = permute;
// @after-stub-for-debug-end
