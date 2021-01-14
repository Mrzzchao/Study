/**
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例:

输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
https://leetcode-cn.com/problems/binary-tree-right-side-view

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function (root) {
  // 如果是一颗空树，就返回空
  if (!root) return [];
  // 结果
  const arr = [];

  // 深度优先遍历
  dfs(root, 0, arr);

  return arr;
};

/**
 * 1. 先优先遍历右子树
 * 2. 遇到节点就插入，当满足结果列表长度等于层数
 * 3. 由于每一层只要一个元素，当结果列表的长度大于层数，那就不用插入该节点了
 * @param {*} node 当前节点
 * @param {*} step 当前是第几层
 * @param {*} res 结果
 */
function dfs(node, step, res) {
  if (node) {
    if (step === res.length) {
      res.push(node.val);
    }

    // 先遍历右子树
    dfs(node.right, step + 1, res);

    // 后遍历左子树
    dfs(node.left, step + 1, res);
  }
}
