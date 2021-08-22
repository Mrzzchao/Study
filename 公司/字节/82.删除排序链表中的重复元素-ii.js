/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  const dummy = new ListNode(null, head);
  let curr = dummy;
  while (curr.next && curr.next.next) {
    // 连续相同了
    if (curr.next.val === curr.next.next.val) {
      const x = curr.next.val;

      while (curr.next && curr.next.val === x) {
        // 删除节点
        curr.next = curr.next.next;
      }
    } else {
      curr = curr.next;
    }
  }

  return dummy.next;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = deleteDuplicates;
// @after-stub-for-debug-end
