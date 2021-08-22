/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 * 子问题，root为根的最大路径和等于Math.max(左边的最大, 右边的最大, root.val + 左 + 右， root.val)
 * 每次 dfs 都计算一下这个节点作为 Root 的最大值（左右节点/有左没右/有右没左），dfs 方法返回这个节点不是根时的最大值。
 */
const maxPathSum = function (root) {
  let maxSum = root.val;
  function dfs(root) {
    if (!root) return 0;
    const leftSum = dfs(root.left);
    const rightSum = dfs(root.right);

    // 只有当前节点、有左无右、有右无左，左右都有。判断谁大
    maxSum = Math.max(
      maxSum,
      root.val,
      root.val + leftSum,
      root.val + rightSum,
      root.val + leftSum + rightSum
    );

    // 返回包含子树和不包含子树的最大值
    return Math.max(root.val + Math.max(leftSum, rightSum), root.val);
  }
  dfs(root);

  return maxSum;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxPathSum;
// @after-stub-for-debug-end
