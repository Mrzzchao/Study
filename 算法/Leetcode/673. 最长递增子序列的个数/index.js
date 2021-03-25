/**
 * https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 * 动态规划
 * dp[i]: nums[i]结尾的最长递增长度
 * count[i]: nums[i]结尾的最长递增组合数。
 * 第一层循环：1 < i < nums.length 遍历数组，计算dp[i]
 * 第二层循环：0 < j < i 遍历nums[i]结尾的组合，计算count[i]
 *
 */
const findNumberOfLIS = function (nums) {
  const len = nums.length;

  // base case
  const dp = new Array(len).fill(1);
  const count = new Array(len).fill(1);

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      // 满足递增条件
      if (nums[i] > nums[j]) {
        // 第一次找到：如果0...i范围内有一个以这个范围结尾的数的dp[j]加上nums[i]大于现有的dp[i]，那就去这个值
        // 并且组合数直接等于这个
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[j] + 1 === dp[i]) {
          // 长度等于dp[i]，那就是匹配组合，直接加上当前的组合数
          count[i] += count[j];
        }
      }
    }
  }

  // 当前递增最长长度
  const max = Math.max(...dp);

  let res = 0;
  for (let i = 0; i < len; i++) {
    if (dp[i] === max) {
      // 累加满足长度为最大的组合数
      res += count[i];
    }
  }

  return res;
};
