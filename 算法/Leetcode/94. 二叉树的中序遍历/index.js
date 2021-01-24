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
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  // 遍历结果
  const result = [];

  function search(node) {
    // 边界情况就是节点为空
    if (node) {
      // 遍历左子树
      search(node.left);

      // 实际操作
      result.push(node.val);

      // 遍历右子树
      search(node.right);
    }
  }

  search(root);

  return result;
};
