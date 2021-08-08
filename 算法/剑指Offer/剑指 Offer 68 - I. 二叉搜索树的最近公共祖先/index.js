/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 1.后序遍历
 * 2.一个节点是最近祖先，代表，包含自己的左、右子树各有一个节点匹配
 * 3.那子问题就是：左子树问题和右子树问题
 * @param {TreeNode} root 树
 * @param {TreeNode} p 节点1
 * @param {TreeNode} q 节点2
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  // 边界条件
  if (root === p || root === q) {
    return root;
  }
  const leftMatch = lowestCommonAncestor(root.left, p, q);
  const rightMatch = lowestCommonAncestor(root.right, p, q);

  // 若左右子树各一个，就是祖先。由于是后序遍历，由下至上。只要匹配，就是最近祖先
  if (leftMatch && rightMatch) {
    return root;
  }
  // 左子树匹配。右子树不匹配。则左孩子就是最近点
  if (leftMatch) {
    return leftMatch;
  }
  // 右子树匹配。左子树不匹配。则右孩子就是最近点
  if (rightMatch) {
    return rightMatch;
  }
};
