/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const tmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tmp;
  }

  return prev;
};
