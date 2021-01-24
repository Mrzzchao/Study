/**
 * 1. 根节点的最大深度是max(l, r) + 1 左子树和右子树最大深度的最大值+1
 * 2. 所以递归解决子问题即可
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
const maxDepth = function (root) {
  let maxDepth = 0;

  function dfs(node) {
    if (!node) return 0;

    const leftDepth = dfs(node.left);
    const rightDepth = dfs(node.right);

    const currentNodeMaxDepth = Math.max(leftDepth, rightDepth) + 1;

    maxDepth = Math.max(maxDepth, currentNodeMaxDepth);

    return currentNodeMaxDepth;
  }

  dfs(root);

  return maxDepth;
};
