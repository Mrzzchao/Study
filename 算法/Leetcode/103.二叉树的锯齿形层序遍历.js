/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
const zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [];

  const queue = [root];
  let sort = 'left';
  const sortMap = {
    left: 'right',
    right: 'left',
  };

  while (queue.length) {
    const arr = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (sort === 'left') {
        arr.push(node.val);
      } else {
        arr.unshift(node.val);
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    sort = sortMap[sort];
    result.push(arr);
  }

  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = zigzagLevelOrder;
// @after-stub-for-debug-end
