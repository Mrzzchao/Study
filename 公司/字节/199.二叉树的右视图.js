/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 * 层序遍历的思路，然后记录每层最后一个
 */
const rightSideView = function (root) {
  if (!root) return [];
  const result = [root.val];
  const queue = [root];
  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    if (queue.length) {
      result.push(queue[queue.length - 1].val);
    }
  }

  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = rightSideView;
// @after-stub-for-debug-end
