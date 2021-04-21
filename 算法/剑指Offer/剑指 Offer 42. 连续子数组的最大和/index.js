/**
 * @param {number[]} nums
 * @return {number}
 * dp[i]: 以nums[i]结尾的最大和
 * base case: dp[0] = nums[0]
 * dp[i] = Math.max(nums[i] + dp[i - 1], dp[i])
 */
const maxSubArray = function (nums) {
  const dp = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
  }

  return Math.max(...dp);
};
