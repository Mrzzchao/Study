/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 快慢指针
 * 就跟跑步一样 如果是操场，跑得快的人早晚会超过跑得慢的人一圈， 早晚会相遇
 */
const hasCycle = function (head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head.next;

  while (fast !== slow) {
    if (fast === null || fast.next === null) return false;
    fast = fast.next.next;
    slow = slow.next;
  }

  return true;
};
// @lc code=end
