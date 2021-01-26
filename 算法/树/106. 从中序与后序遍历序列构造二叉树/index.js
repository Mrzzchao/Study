/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 1. 后序数组的最后一个节点是树的根结点
 * 2. 那在中序数组里，根节点左边是左子树，右边是右子树
 * 3. 那就知道左子树的节点个数
 * 4. 那就可以知道中序数组、后序数组，左子树和右子树的节点范围了
 * 5. 之后就是子问题了
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const buildTree = function (inorder, postorder) {
  // 存取树节点和中序数组索引的映射，为了查出根结点的位置
  const map = {};

  inorder.forEach((num, idx) => {
    map[num] = idx;
  });

  /**
   * 递归构建树
   * @param {number} iStart 在中序数组里面的起始索引
   * @param {number} iEnd 在中序数组里面的结束索引
   * @param {number} pStart 在后序数组里面的起始索引
   * @param {number} pEnd 在后序数组里面的结束索引
   */
  function helper(iStart, iEnd, pStart, pEnd) {
    // 递归边界
    if (iStart > iEnd || pStart > pEnd) {
      return null;
    }
    // 根结点
    const rootVal = postorder[pEnd];

    // 根结点在中序数组的索引
    const iRootIndex = map[rootVal];

    // 左子树节点个数
    const leftTreeLen = iRootIndex - iStart;

    // 根节点构建二叉树
    const root = new TreeNode(rootVal);

    // 构建左子树
    root.left = helper(iStart, iRootIndex - 1, pStart, pStart + leftTreeLen - 1);
    // 构建右子树
    root.right = helper(iRootIndex + 1, iEnd, pStart + leftTreeLen, pEnd - 1);

    return root;
  }

  return helper(0, inorder.length - 1, 0, postorder.length - 1); // 递归的入口
};

const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];

const tree = buildTree(inorder, postorder);
console.log(tree);
