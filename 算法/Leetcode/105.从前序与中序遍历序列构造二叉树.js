/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 前序找树头
 * 中序分割左右
 */
const buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);

  const rootIndex = inorder.indexOf(rootVal);

  // 左子树节点
  const leftArr = inorder.slice(0, rootIndex);
  // 右子树节点
  const rightArr = inorder.slice(rootIndex + 1);

  const newLeftPreOrder = preorder.slice(1, leftArr.length + 1);
  const newRightPreOrder = preorder.slice(leftArr.length + 1);

  root.left = buildTree(newLeftPreOrder, leftArr);
  root.right = buildTree(newRightPreOrder, rightArr);

  return root;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = buildTree;
// @after-stub-for-debug-end
