/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function (head, left, right) {
  if (!head) return null;
  if (right === 1) return head;
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

  let count = 1;
  let rHeadPre = null;
  let rHead = head;
  let rEnd = null;

  let pre = null;
  let curr = head;

  while (curr) {
    if (count === left) {
      rHead = curr;
      rHeadPre = pre;
    }
    if (count === right) {
      const tmp = curr.next;
      rEnd = curr;

      // 先切断
      rEnd.next = null;
      const newList = reverse(rHead);
      // 再链接
      rHead.next = tmp;
      if (rHeadPre) {
        // 如果是中间反转的，那就连上
        rHeadPre.next = newList;
      } else {
        // 如果前头部没有，证明就是从头部反转，那直接返回新头部就可以了
        return newList;
      }

      return head;
    }
    pre = curr;
    curr = curr.next;
    count++;
  }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = reverseBetween;
// @after-stub-for-debug-end
