/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * Encodes a tree to a single string.
 *1. 先序遍历，为了很容易定位根结点
 *2. 每一个遍历点+左子树的遍历序列+右子树的遍历序列
 *3. 子问题就是左子树的序列和右子树的序列
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
  if (root === null) {
    return 'X';
  }

  const left = serialize(root.left);
  const right = serialize(root.right);

  return `${root.val},${left},${right}`;
};

/**
 * Decodes your encoded data to tree.
 * 0. 按先序遍历的逻辑去构建。那就复制操作路径即可。
 * 1. 编写一个buildTree的构建树函数，参数是构建的序列数组
 * 2. 每一次从序列化数组里面推一个节点出来。构建一个tree节点 root
 * 3. 如果root === X 就是边界
 * 4. 如果root不等于，那子问题是：去掉退出来的数组
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
  const list = data.split(',');

  const buildTree = (list) => {
    const rootVal = list.shift();

    if (rootVal === 'X') {
      return null;
    }

    const root = new TreeNode(rootVal);

    // 构建左子树
    root.left = buildTree(list);
    root.right = buildTree(list);

    return root;
  };

  return buildTree(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
