/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = function (root) {
  let sum = 0;
  function dfs(root, numStr) {
    if (!root) {
      return null;
    }
    numStr += root.val;
    // 叶子结点判断
    if (!root.left && !root.right) {
      sum += +numStr;
    }

    dfs(root.left, numStr);
    dfs(root.right, numStr);
  }

  dfs(root, '');
  // 需要除以2 因为一个叶子结点会遍历两次，计算两回
  return sum;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = sumNumbers;
// @after-stub-for-debug-end
