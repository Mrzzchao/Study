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
  function helper(l1, l2, more = 0) {
    if (!l1 && !l2) {
      if (more === 1) {
        return new ListNode(1);
      }
      return null;
    }
    if (!l1) {
      const newVal = l2.val + more;
      if (newVal >= 10) {
        l2.val = newVal % 10;
        l2.next = helper(l1, l2.next, 1);
        return l2;
      }
      l2.val = newVal;
      return l2;
    }
    if (!l2) {
      const newVal = l1.val + more;
      if (newVal >= 10) {
        l1.val = newVal % 10;
        l1.next = helper(l1.next, l2, 1);
        return l1;
      }
      l1.val = newVal;
      return l1;
    }

    const newVal = l1.val + l2.val + more;
    l1.val = newVal % 10;
    l1.next = helper(l1.next, l2.next, Math.floor(newVal / 10));

    return l1;
  }

  return helper(l1, l2, 0);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end
