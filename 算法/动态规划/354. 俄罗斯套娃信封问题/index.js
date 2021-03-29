/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 * 动态规划
 * 1. 先排序。排序规则是先按宽度升序，宽度相同降序（为了避免宽度相同当作可以装了），然后高度升序。
 * 2. 把高度用最长递增子序列的逻辑去做。
 */
const maxEnvelopes = function (envelopes) {
  // 排序
  envelopes = envelopes.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });

  // 以第i 个信封结尾最大的可装树
  const dp = new Array(envelopes.length).fill(1);
  // 最长装数
  let maxLen = 1;

  for (let i = 1; i < envelopes.length; i++) {
    for (let j = 0; j < i; j++) {
      // 满足条件
      if (envelopes[j][1] < envelopes[i][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    maxLen = Math.max(maxLen, dp[i]);
  }

  return maxLen;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxEnvelopes;
// @after-stub-for-debug-end
