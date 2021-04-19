/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}

 */
const isSubStructure = function (A, B) {
  if (A === null || B === null) return false;
  // B是否包含为A为根的子结构
  function isInclude(A, B) {
    // B遍历完成，就代表都匹配
    if (B === null) return true;

    // 到达A的边界，但是没到B的边界，就代表不匹配
    if (A === null) return false;

    // 值不相等也不匹配
    if (A.val !== B.val) return false;

    // 要想满足是子结构，左右节点也得满足
    return isInclude(A.left, B.left) && isInclude(A.right, B.right);
  }

  // 只要根开始或左子树开始或右子树开始任意满足，就代表满足
  return isInclude(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};
