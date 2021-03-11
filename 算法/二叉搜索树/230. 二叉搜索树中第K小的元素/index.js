/**
 * https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归做法
 * 1. 使用中序遍历 中序是左 根 右 刚好是大小顺序
 * 2. 中序遍历 记录遍历的值 进 arr
 * 3. 所以第k小就是arr[k - 1]
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  const arr = [];

  function dfs(root) {
    if (root === null) return;
    dfs(root.left);
    arr.push(root.val);
    dfs(root.left);
  }

  dfs(root);

  return arr[k - 1];
};
