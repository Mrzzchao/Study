/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 递归
 * 前序确定头、中序确定左右子树
 */
const buildTree = function (preorder, inorder) {
  if (inorder.length === 0) return null;
  const [rootVal] = preorder;
  const root = new TreeNode(rootVal);

  const rootIdxInOrder = inorder.indexOf(rootVal);

  const leftTree = inorder.slice(0, rootIdxInOrder);
  const rightTree = inorder.slice(rootIdxInOrder + 1);

  root.left = buildTree(preorder.slice(1, rootIdxInOrder + 1), leftTree);
  root.right = buildTree(preorder.slice(rootIdxInOrder + 1), rightTree);

  return root;
};
