/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = function (root, targetSum) {
  const result = [];
  const track = [];
  function backtrack(root, targetSum) {
    if (!root) return;
    track.push(root.val);

    if (root.left === null && root.right === null) {
      if (targetSum === root.val) {
        result.push([...track]);
        track.pop();
        return;
      }
    }
    backtrack(root.left, targetSum - root.val);
    backtrack(root.right, targetSum - root.val);
    track.pop();
  }

  backtrack(root, targetSum);

  return result;
};
// @lc code=end
