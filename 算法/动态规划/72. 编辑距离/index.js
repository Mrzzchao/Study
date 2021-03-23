/**
 * https://leetcode-cn.com/problems/edit-distance/
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 *
 * 递归做法
 * 递归函数 dp(i, j): word1[0...i]与word2[0...j]字符串的最小编辑距离
 * base case: i === -1 or j === -1
 * 子问题（从word1变成word2）:
 * dp(i, j - 1) 新增
 * dp(i - 1, j) 删除
 * dp(i - 1, j - 1) 替换
 */
const minDistance = function (word1, word2) {
  // 做递归缓存的,减少递归次数
  const memory = {};

  function dp(i, j) {
    const match = memory[[i, j].toString()];
    if (match) {
      return match;
    }
    console.log('dp');
    // base case: 如果任何一个字符串遍历完了，就代表新增或者删除剩余字符串个
    if (i === -1) return j + 1;
    if (j === -1) return i + 1;

    // 相等就无事发生，继续比较下一个
    if (word1[i] === word2[j]) {
      return getDp(i - 1, j - 1);
    }
    return Math.min(getDp(i, j - 1) + 1, getDp(i - 1, j) + 1, getDp(i - 1, j - 1) + 1);
  }

  function getDp(i, j) {
    const match = memory[[i, j].toString()];
    if (match) {
      return match;
    }
    memory[[i, j].toString()] = dp(i, j);

    return memory[[i, j].toString()];
  }

  return dp(word1.length - 1, word2.length - 1);
};

/*
 * 动态规划
 * dp函数 dp[i][j]: word1[0...i]与word2[0...j]字符串的最小编辑距离
 * base case: i === word1.lenth or j === word2.lenth。
 * 状态: i, j
 * 选择: word1、word2的新增、删除、替换。分别对应i，j的变化
 * 状态转移方程: dp[i, j] = min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1])
 * dp[i][j - 1] 新增
 * dp[i - 1][j] 删除
 * dp[i - 1][j - 1] 替换
 */
const minDistance2 = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // dp[i][j]: word1[0...i]与word2[0...j]字符串的最小编辑距离
  const dp = [];

  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n);
  }

  // base case：dp[0][0] 最小编辑就是0
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // 相等的话 最小编辑距离就等于之前的字符
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          Math.min(
            dp[i][j - 1], // 新增
            dp[i - 1][j], // 删除
            dp[i - 1][j - 1] // 替换
          ) + 1;
      }
    }
  }

  return dp[m][n];
};

const arr = ['horse', 'ros'];

console.log(minDistance2(arr[0], arr[1]));
