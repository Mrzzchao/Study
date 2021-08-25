/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  let fast = head;
  let i = 1;
  while (i < n && fast) {
    fast = fast.next;
    i++;
  }

  if (!fast) {
    return head.next;
  }

  let curr = head;
  let pre = null;

  while (fast.next) {
    pre = curr;
    curr = curr.next;
    fast = fast.next;
  }

  if (pre) {
    pre.next = curr.next;
    return head;
  }
  return head.next;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeNthFromEnd;
// @after-stub-for-debug-end
