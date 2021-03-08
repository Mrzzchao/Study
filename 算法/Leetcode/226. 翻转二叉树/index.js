/**
 * https://leetcode-cn.com/problems/invert-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 递归做法
 * 1. base case root === null；
 * 2. 原问题：翻转root树
 * 3. 子问题：翻转root.left和root.right
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (!root) return null;

  // 后序遍历
  const left = invertTree(root.left);
  const right = invertTree(root.right);

  // 翻转逻辑
  root.left = right;
  root.right = left;

  return root;
};
