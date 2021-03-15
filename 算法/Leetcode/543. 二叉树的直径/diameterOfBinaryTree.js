/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var diameterOfBinaryTree = function(root) {
    let max = 0

    // 深度优先遍历 计算节点深度
    function deepSearch(node) {
        if(!node) return 0

        let leftLen = deepSearch(node.left)
        let rightLen = deepSearch(node.right)

        max = Math.max(leftLen + rightLen, max)

        // 返回当前节点的深度
        return Math.max(leftLen, rightLen) + 1
    }

    deepSearch(root)

    return max
};