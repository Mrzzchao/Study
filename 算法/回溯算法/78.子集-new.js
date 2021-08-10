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

  function backtrack(startIndex) {
    result.push([...track]);

    // 遍历选择列表，可选的会去掉之前已经选过的，起到去重的作用
    for (let i = startIndex; i < nums.length; i++) {
      // 做选择
      track.push(nums[i]);
      //
      backtrack(i + 1);
      // 撤销选择
      track.pop();
    }
  }

  backtrack(0);

  return result;
};
// @lc code=end
