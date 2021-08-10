/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
  const result = [];
  const track = [];
  const map = {};
  function backtrack(nums = [], track = []) {
    // 结束条件，遍历完了
    if (nums.length === 0) {
      const newTrack = [...track];
      map[JSON.stringify(newTrack)] = 1;
      result.push(newTrack);
    }

    // 遍历选择列表
    for (let i = 0; i < nums.length; i++) {
      // 做选择
      const num = nums[i];
      track.push(num);
      if (map[JSON.stringify(track)]) {
        track.pop();
        continue;
      }
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
// @lc code=end

// @after-stub-for-debug-begin
module.exports = permuteUnique;
// @after-stub-for-debug-end
