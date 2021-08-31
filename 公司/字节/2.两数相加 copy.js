/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const newList = new ListNode(0);
  let pre = newList;
  let curr = newList;
  let more = 0;

  while (l1 || l2) {
    const value = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + more;

    curr.val = value % 10;
    more = Math.floor(value / 10);

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }

    curr.next = new ListNode(0);
    pre = curr;
    curr = curr.next;
  }

  if (more === 1) {
    curr.val = 1;
  } else {
    pre.next = null;
  }

  return newList;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end
