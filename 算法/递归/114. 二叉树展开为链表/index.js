/**
 * https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 将以 root 为根的树拉平为链表
 * 递归做法：
 * 1. 将 root 的左子树和右子树拉平。
 * 2. 将 root 的右子树接到左子树下方，然后将整个左子树作为右子树。
 * 3. 后序遍历整棵树，然后
 * i. 将左子树作为右子树
 * ii. 将右子树链接到左子树
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function (root) {
  // base case
  if (!root) return null;

  flatten(root.left);
  flatten(root.right);

  /** ** 后序遍历位置 ****/
  // 1、左右子树已经被拉平成一条链表
  const { left } = root;
  const { right } = root;

  // 2、将左子树作为右子树
  root.left = null;
  root.right = left;

  // 3、将原先的右子树接到当前右子树的末端
  let p = root;
  while (p.right != null) {
    p = p.right;
  }
  p.right = right;
};
