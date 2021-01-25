/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 1. 利用先序遍历，每一次遍历加上当前值
 * 2. 当是叶子节点时，判断和是否等于目标值
 * 3. 等于返回true 全部遍历完没有返回false
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
  const sum = 0;

  function dfs(node, preSum = 0) {
    if (!node) return;
    const sum = preSum + node.val;
    console.log('sum', sum);
    if (!node.left && !node.right && sum === targetSum) {
      return true;
    }
    return dfs(node.left, sum) || dfs(node.right, sum);
  }

  return !!dfs(root, 0);
};

/**
 * 递归做法
 * 1. 当前问题等于sum - node.val的左子树问题和右子树问题
 * 2. 所以递归左子树和右子树。hasPathSum2(root.left, targetSum - root.val)
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum2 = function (root, targetSum) {
  if (!root) return false;

  // 遇到叶子节点的时候判断
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  // 左子树问题和右子树问题
  return (
    hasPathSum2(root.left, targetSum - root.val) || hasPathSum2(root.right, targetSum - root.val)
  );
};
