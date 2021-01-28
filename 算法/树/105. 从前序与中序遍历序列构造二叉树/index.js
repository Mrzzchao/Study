/**
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
 * 1. 前序遍历是中、左、右。所以第一个节点就是根节点
 * 2. 中序遍历是左、中、右。中节点的左边是左子树，右边是右子树。
 * 3. 通过中序数组就知道左子树的节点范围、节点个数
 * 4. 然后通过节点个数就知道左子树和右子树在前序数组的节点范围
 * 5. 接着就是子问题了
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  if (inorder.length === 0) return null;

  // 根结点就是前序数组第一个节点
  const rootVal = preorder[0];

  const root = new TreeNode(rootVal);

  // 根结点在中序数组中的索引
  const rootIndex = inorder.indexOf(rootVal);

  // 左子树节点个数
  const leftTreeLen = rootIndex + 1;

  // 左子树 [1,2,3,4,5].slice(0, 3) = [1,2,3]
  root.left = buildTree(preorder.slice(1, leftTreeLen), inorder.slice(0, rootIndex));

  // 右子树
  root.right = buildTree(preorder.slice(leftTreeLen), inorder.slice(leftTreeLen));

  return root;
};

const inorder = [1, 2, 3, 4];
const postorder = [4, 3, 2, 1];

const tree = buildTree(postorder, inorder);
console.log(tree);
