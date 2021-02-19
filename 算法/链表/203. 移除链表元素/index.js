/**
 * 1. 遍历链表
 * 2. 当node.val === val时
 *  i. 前节点指向后节点
 *  ii. 删除节点指向null
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * https://leetcode-cn.com/problems/remove-linked-list-elements/
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
  let curr = head;
  let pre = null;
  while (curr) {
    const { next } = curr;
    if (curr.val === val) {
      if (pre) {
        pre.next = curr.next;
        // 清空匹配节点的右指针指向
        curr.next = null;
      } else {
        // 如果前置指针不存在就代表删除的是头节点，头指针就要移动到后一个节点上
        head = next;
      }
    } else {
      pre = curr;
    }

    // 移动指针
    curr = next;
  }

  return head;
};
