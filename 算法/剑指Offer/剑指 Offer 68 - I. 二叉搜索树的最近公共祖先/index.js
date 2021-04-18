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
 */
const lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
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

  if (matchRight) {
    return matchRight;
  }
};
