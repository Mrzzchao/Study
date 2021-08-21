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
 * 快慢指针来实现
 * 如果存在环，那快指针一定会追上满指针，有一个重合点。
 *
 */
const hasCycle = function (head) {
  if (!head) return false;
  let fast = head.next;
  let slow = head;

  while (fast) {
    fast = (fast.next && fast.next.next) || null;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
};
// @lc code=end
