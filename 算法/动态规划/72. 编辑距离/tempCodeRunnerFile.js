/**
 * https://leetcode-cn.com/problems/edit-distance/
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 *
 * 递归做法
 * 递归函数 dp(i, j): word1[0...i]与word2[0...j]字符串的最小编辑距离
 * base case: i === -1 && j === -1
 * 子问题（从word1变成word2）:
 * dp(i, j - 1) 新增
 * dp(i - 1, j) 删除
 * dp(i - 1, j - 1) 替换
 */
const minDistance = function (word1, word2) {
  function dp(i, j) {
    // base case: 如果任何一个字符串遍历完了，就代表新增或者删除剩余字符串个
    if (i === -1) return j + 1;
    if (j === -1) return i + 1;

    if (word1[i] === word2[j]) {
      return dp(i - 1, j - 1);
    }
    return Math.min(dp(i, j - 1) + 1, dp(i - 1, j) + 1, dp(i - 1, j - 1) + 1);
  }

  return dp(word1.length - 1, word2.length - 1);
};

const arr = ['dinitrophenylhydrazine', 'benzalphenylhydrazone'];

console.log(minDistance(...arr));
