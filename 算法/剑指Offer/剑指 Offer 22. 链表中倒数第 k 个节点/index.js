/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const getKthFromEnd = function (head, k) {
  let matchNode = head;
  function helper(node) {
    if (node === null) {
      return 0;
    }
    const count = helper(node.next) + 1;
    if (count === k) {
      matchNode = node;
    }
    return count;
  }

  helper(head);

  return matchNode;
};
