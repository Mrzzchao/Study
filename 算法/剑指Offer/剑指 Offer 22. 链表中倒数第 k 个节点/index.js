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
 * 双指针
 * 1.快指针先移动k格
 * 2.然后快慢指针一起移动。
 * 3.当快指针到尾部的时候，慢指针就在倒数第k节点了。
 *
 * 例子
 * [1,2,3,4,5,6,7] 3
 * 快指针先移动3格，就变成[3,4,5,6,7]
 * 然后慢指针和快指针开始移动。
 * [3,4,5,6,7]
 * [1,2,3,4,5,6,7]
 * 当快指针移动到尾部7的时候，慢指针在5的位置，刚好倒数第k格。
 */
const getKthFromEnd = function (head, k) {
  let fast = head;
  let slow = head;
  let n = 1;
  while (n < k) {
    fast = fast && fast.next;
    n++;
  }

  // 如果已经到尾部了，说明长度不足k。倒数第k就是头节点
  if (fast === null) {
    return head;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};
