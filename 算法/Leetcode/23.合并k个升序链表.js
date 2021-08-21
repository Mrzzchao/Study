/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 * 就两两合并，当作合并两个升序的解法就行了。
 */
const mergeKLists = function (lists) {
  function merge(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.val < l2.val) {
      l1.next = merge(l1.next, l2);
      return l1;
    }

    l2.next = merge(l1, l2.next);

    return l2;
  }

  return lists.reduce((pre, cur) => {
    const newList = merge(pre, cur);
    return newList;
  }, null);
};
// @lc code=end
