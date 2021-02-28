/**
 * https://leetcode-cn.com/problems/rotate-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 旋转向右移动，就可以理解成
 * 1.先将链表闭合成环
 * 2.找到相应的位置断开这个环，确定新的链表头和链表尾
 * 3.断开的位置就是从老头部节点遍历
 * 4.找到新的尾部，第 (n - k % n - 1) 个节点 ，新的链表头是第 (n - k % n) 个节点
 * 当k > n时 可以理解成环绕一圈，重新再来，所以是 k % n
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
  if (!head) return null;
  if (k === 0) return head;
  let curr = head;

  // 链表长度
  let n = 1;
  // 1. 取到尾节点，并指向头节点，形成环
  while (curr.next) {
    n = n + 1;
    curr = curr.next;
  }
  curr.next = head;

  // 索引下标
  let index = 1;
  let newCurr = head;
  while (index <= n - (k % n) - 1) {
    newCurr = newCurr.next;
    index = index + 1;
  }

  const newHead = newCurr.next;
  newCurr.next = null;

  return newHead;
};
