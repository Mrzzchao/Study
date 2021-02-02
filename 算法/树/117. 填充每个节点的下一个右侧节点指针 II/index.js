/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * 1. 大框架使用层序遍历
 * 2. 层序遍历时，节点N.next = N+1
 * @param {Node} root
 * @return {Node}
 */
const connect = function (root) {
  const queue = [root];
  const index = 0;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      // 取出一个节点
      const node = queue.shift();

      // 链接节点，除了最后一个。此时第一个节点就是下一个节点
      if (i < size - 1) {
        node.next = queue[0];
      }

      // 插入下一层节点
      if (node && node.left) {
        queue.push(node.left);
      }
      if (node && node.right) {
        queue.push(node.right);
      }
    }
  }
  console.log('root', root);
  return root;
};
