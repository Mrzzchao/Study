/**
 * https://leetcode-cn.com/problems/target-sum/
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 * 前序遍历问题
 * 左子树是+，右子树是-
 */
const findTargetSumWays = function (nums, S) {
  let result = 0;
  function caculator(nums, sum, i) {
    if (i === nums.length) {
      if (sum === S) {
        result = result + 1;
      }
      return;
    }

    caculator(nums, sum - nums[i], i + 1);
    caculator(nums, sum + nums[i], i + 1);
  }

  caculator(nums, 0, 0);

  return result;
};
