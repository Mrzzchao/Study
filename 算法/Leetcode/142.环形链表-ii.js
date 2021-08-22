/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
const detectCycle = function (head) {
  const map = new Map();

  let slow = head;
  while (slow) {
    const count = map.get(slow) || 0;
    if (count === 2) {
      return slow;
    }
    map.set(slow, count + 1);

    slow = slow.next;
  }
  return null;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = detectCycle;
// @after-stub-for-debug-end
