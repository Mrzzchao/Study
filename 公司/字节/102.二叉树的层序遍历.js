/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const result = [];

  while (queue.length) {
    const len = queue.length;
    const tmp = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      tmp.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    result.push(tmp);
  }

  return result;
};
// @lc code=end
