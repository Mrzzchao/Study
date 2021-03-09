/**
 * https://leetcode-cn.com/problems/maximum-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * 递归做法
 * 1. 用先序遍历
 * 2. 每一次遍历找到数组中最大的值，并记录索引为index，然后新建一个root节点。
 * 3. 然后
 * i. 左子树：root.left = constructMaximumBinaryTree(nums.slice(0, index))
 * ii.右子树：root.right = constructMaximumBinaryTree(nums.slice(index))
 * iii. return root
 * 4. base case是 nums.lenght === 0;
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = function (nums) {
  // base case: 数组为空
  if (nums.length === 0) return null;

  // 1. 找到数组中最大的值
  let max = Number.MIN_SAFE_INTEGER;
  let index;
  nums.forEach((num, idx) => {
    if (num > max) {
      max = num;
      index = idx;
    }
  });

  // 2. 新建最大节点
  const root = new TreeNode(max);

  root.left = constructMaximumBinaryTree(nums.slice(0, index));
  root.right = constructMaximumBinaryTree(nums.slice(index + 1));

  return root;
};
