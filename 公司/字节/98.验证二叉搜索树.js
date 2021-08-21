/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 * 其实就是中序遍历时，满足大小递增
 */
const isValidBST = function (root) {
  let pre = Number.MIN_SAFE_INTEGER;
  function inOrder(root) {
    if (root === null) return true;

    const left = inOrder(root.left);
    if (pre >= root.val) {
      return false;
    }
    pre = root.val;
    const right = inOrder(root.right);

    return left && right;
  }

  return inOrder(root);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isValidBST;
// @after-stub-for-debug-end
