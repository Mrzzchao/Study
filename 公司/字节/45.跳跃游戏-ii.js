/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 贪心算法去做
 * 就是每次选择能选择里面最接近答案的
 * 每一个位置都有一个可跳跃的范围。范围的右边界是end。
 * 遍历的时候更新可以到的最远，直到遍历完
 */
const jump = function (nums) {
  let end = 0;
  let maxPos = 0;
  let step = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxPos = Math.max(maxPos, nums[i] + i);

    if (i === end) {
      end = maxPos;
      step++;
    }
  }

  return step;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = jump;
// @after-stub-for-debug-end
