/**
 * 1. 利用层序遍历
 * 2. 前后双子针，一个从前扫，一个从后扫
 * 3. 对比两个子针对应的值是否相等
 * 4. 如果整颗树遍历完了都相等，则就是对称二叉树
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
const isSymmetric = function (root) {
  if (!root) return true;
  return check(root.left, root.right);
};

function check(left, right) {
  // 辅助队列，做层序遍历
  const queue = [left, right];

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i += 2) {
      // 双子针，一个指向从左边扫，一个从右边扫
      const left = queue.shift();
      const right = queue.shift();

      if ((!left && right) || (left && !right)) return false;

      if (left && right) {
        if (left.val !== right.val) {
          return false;
        }

        // 插入的时候按最左边、最右边向中间逼近的原则插入
        queue.push(left.left, right.right); // 推入下一层的一对节点
        queue.push(left.right, right.left); // 推入下一层的一对节点
      }
    }
  }

  return true;
}

/**
 * 递归的方式去做
 * 1. 满足对称代表，他的左子树和右子树都满足对称
 * @param {*} root 根结点
 */
const isSymmetric2 = function (root) {
  function check(left, right) {
    if (!left && !right) {
      return true;
    }

    if (left && right) {
      return (
        left.val === right.val && check(left.left, right.right) && check(left.right, right.left)
      );
    }

    return false;
  }

  if (!root) {
    return true;
  }

  return check(root.left, root.right);
};
