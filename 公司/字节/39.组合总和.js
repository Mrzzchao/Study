/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 回溯
 * 选择：所有数字
 * 路径：被选的数字
 * 结束：和大于等于target
 */
const combinationSum = function (candidates, target) {
  const track = [];
  const result = [];
  let sum = 0;

  function backtrack(start) {
    if (sum >= target) {
      if (sum === target) {
        result.push([...track]);
      }
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      sum += candidates[i];
      track.push(candidates[i]);
      backtrack(i);

      sum -= candidates[i];
      track.pop();
    }
  }

  backtrack(0);

  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = combinationSum;
// @after-stub-for-debug-end
