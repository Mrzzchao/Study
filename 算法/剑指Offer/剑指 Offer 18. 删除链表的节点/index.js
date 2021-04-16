/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const deleteNode = function (head, val) {
  let current = head;
  let prev = null;

  while (current) {
    if (current.val === val) {
      if (head === current) {
        head = current.next;
        break;
      } else {
        prev.next = current.next;
        current = null;
        break;
      }
    }
    prev = current;
    current = current.next;
  }

  return head;
};
