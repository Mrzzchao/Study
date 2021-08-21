/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 * 子问题：左子树是否满足targetSum - root.val或者右子树是否满足targetSum - root.val
 */
const hasPathSum = function (root, targetSum) {
  if (!root) return false;

  if (root.left === null && root.right === null) {
    if (root.val === targetSum) {
      return true;
    }
    return false;
  }
  return (
    hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
  );
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = hasPathSum;
// @after-stub-for-debug-end
