/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const isSymmetric = function (root) {
  const queue = [root.left, root.right];

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i = i + 2) {
      const left = queue.shift();
      const right = queue.shift();

      // 只有一个为空，另外一个不为空，不算对称
      if ((!left && right) || (left && !right)) return false;

      if (left && right) {
        if (left.val !== right.val) {
          return false;
        }
      } else {
        // 左子树和右子树都为空，直接跳过，这种也算相等
        continue;
      }

      // 按对称顺序来放
      queue.push(left.left, right.right);
      queue.push(left.right, right.left);
    }
  }
  return true;
};
// @lc code=end
