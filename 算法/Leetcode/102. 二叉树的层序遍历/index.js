/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 1. 先把根结点放入队列
 * 2. 取出根节点，判断左右树根是否为空，如果不为空，则放入队列
 * 3. 继续循环1-2，直至队列为空
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return [];
  // 存取遍历的节点
  const queue = [root];

  // 结果
  const result = [];

  while (queue.length) {
    // 当前层的临时数组，为了把当层的所有节点全部清空
    const tmp = [];
    const size = queue.length;

    // 遍历当前层
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      tmp.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(tmp);
  }
  return result;
};
