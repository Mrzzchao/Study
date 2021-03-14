/**
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 * 状态转移公式：dp[i]=max(dp[j])+1,其中0≤j<i且num[j]<num[i]
 * 所以最长就是：max(dp[i]),其中0≤i<n
 */
const lengthOfLIS = function (nums) {
  // 最长结果
  let maxLen = 1;

  // 动态数组，dp[i]代表第i个结尾最长的序列长度。所以第一个长度就是1
  const dp = [1];
  for (let i = 1; i < nums.length; i++) {
    // 设置一个默认最大值，至少上升就是本身，就是1
    dp[i] = 1;

    for (let j = 0; j < i; j++) {
      // 如果第j个小于第i个，则满足条件，对比第几个最长+1和当前记录第i个最长的大小，取最大
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    // 每一轮循环都比较当前dp[i]是否是最大的
    maxLen = Math.max(maxLen, dp[i]);
  }

  return maxLen;
};
