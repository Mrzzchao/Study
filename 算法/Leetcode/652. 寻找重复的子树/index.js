/**
 * https://leetcode-cn.com/problems/find-duplicate-subtrees/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归做法
 * 1. 定一个map 利用二叉树的序列化算法统计出所有序列的值 一次递归记为map[name]++。
 * 2. 如果在递归时，map[name] === 2 说明已经重复了，就记录在结果数组里面
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function (root) {
  // 结果数组
  const result = [];

  // 序列化映射
  const map = {};

  // 序列化算法
  function serialize(root) {
    if (root === null) {
      return 'X';
    }

    const left = serialize(root.left);
    const right = serialize(root.right);

    // 记录在序列化映射表里
    const name = `${root.val},${left},${right}`;
    if (map[name]) {
      map[name] = map[name] + 1;
    } else {
      map[name] = 1;
    }

    // 值等于2 满足重复条件 新增进结果列表
    if (map[name] === 2) {
      result.push(root);
    }

    return name;
  }

  serialize(root);

  return result;
};
