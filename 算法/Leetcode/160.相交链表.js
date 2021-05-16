/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 其实就headA、headb到尾部的时候，重新遍历另外一个链表即可
 * 例如
 * 1->2->3->5->6
 * 9->8->5->6
 *
 * 到尾部重新遍历另外一个，那就是
 * 1->2->3->5->6->9->8->5->6
 * 9->8->5->6->1->2->3->5->6
 *
 * 会发现，如果他们相交的话，后面一定会相遇，所以第一个相等的节点就是答案了
 */
const getIntersectionNode = function (headA, headB) {
  let currA = headA;
  let currB = headB;

  while (headA || headB) {
    if (!currA) {
      headB = headB.next;
    }
    if (!currB) {
      headA = headA.next;
    }

    if (headA === headB) {
      return headA;
    }

    currA = currA && currA.next;
    currB = currB && currB.next;
  }

  return null;
};
// @lc code=end
