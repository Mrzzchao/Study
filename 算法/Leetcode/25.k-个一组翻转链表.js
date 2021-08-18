/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
// 1->2->3->4->5->6 2
const reverseKGroup = function (head, k) {
  // 反转链表
  function reverse(head) {
    let pre = null;
    let curr = head;

    while (curr) {
      const tmp = curr.next;
      curr.next = pre;
      pre = curr;
      curr = tmp;
    }

    return pre;
  }

  // 分组k
  let currHead = head;
  let preHead = null;
  let curr = head;
  let count = 1;
  let newHead = head;
  while (curr) {
    const tmp = curr.next;
    // 如果到一组后
    // 先把当前指针的尾部去掉
    // 然后进行反转逻辑
    // 然后当前头指针移动到下一个节点
    if (count === k) {
      curr.next = null;
      const newList = reverse(currHead);
      currHead.next = tmp;
      if (preHead) {
        preHead.next = newList;
      } else {
        newHead = newList;
      }
      preHead = currHead;
      currHead = tmp;
      count = 0;
    }
    count++;
    curr = tmp;
  }

  return newHead;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = reverseKGroup;
// @after-stub-for-debug-end
