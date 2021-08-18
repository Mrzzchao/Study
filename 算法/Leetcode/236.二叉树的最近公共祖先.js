/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 只要在左子树找到一个点相等，右子树找到一个点相等，就是公共祖先节点
 */
const lowestCommonAncestor = function (root, p, q) {
  if (root === null) return null;
  if (root === p || root === q) {
    return root;
  }
  const matchLeft = lowestCommonAncestor(root.left, p, q);
  const matchRight = lowestCommonAncestor(root.right, p, q);

  if (matchLeft && matchRight) {
    return root;
  }
  if (matchLeft) {
    return matchLeft;
  }
  return matchRight;
};
// @lc code=end
