/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * https://leetcode-cn.com/problems/subsets/solution/shou-hua-tu-jie-zi-ji-hui-su-fa-xiang-jie-wei-yun-/
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const result = [];
  const track = [];
  const selectList = [true, false];

  function backtrack(startIndex) {
    // 到达叶子结点了
    if (startIndex === nums.length) {
      result.push([...track]);
      return;
    }

    // 选择当前数字的情况
    track.push(nums[startIndex]);
    backtrack(startIndex + 1);

    // 不选择当前数字的情况
    track.pop();
    backtrack(startIndex + 1);
  }

  backtrack(0);

  return result;
};
// @lc code=end
