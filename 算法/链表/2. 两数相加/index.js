/**
 * https://leetcode-cn.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 递归方法
 * 1. 子问题：l1 + l2就等于 l1.next + l2.next + (l1 + l2) / 10
 * 2. 所以 只需要看当前节点是否进1 进1传给后面的节点即可
 * 3. 边界
 * i. 如果!l1 l1.next = l2 并继续递归
 * ii.如果!l2 结束递归
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  function handler(l1, l2, preNode, preNum = 0) {
    // 边界就是两个链表都遍历完了
    if (!l1 && !l2) {
      // 代表最后一位也进一了，需要新建一个节点，前置节点指向这个新节点
      if (preNum === 1) {
        const node = new ListNode(1);
        preNode.next = node;
      }
      return;
    }
    const l1Val = (l1 && l1.val) || 0;
    const l2Val = (l2 && l2.val) || 0;

    // 求和 两个节点 + 进位 取余数
    const sum = (l1Val + l2Val + preNum) % 10;

    // 进位 两个节点 + 进位 取整数
    const moreNum = parseInt((l1Val + l2Val + preNum) / 10, 10);

    // l1的下一个节点
    let l1Next = null;

    // 上一个节点指针
    preNode = l1 || l2;
    if (l1) {
      l1.val = sum;
      l1Next = l1.next;

      // 如果l1链表到最后一个节点，并且l2的下一个节点还在
      if (!l1.next && l2 && l2.next) {
        l1.next = l2.next;
        preNode = l2;
        l1Next = null;
      }
    } else if (l2) {
      l2.val = sum;
    }

    return handler(l1Next, l2 && l2.next, preNode, moreNum);
  }

  handler(l1, l2, null, 0);

  return l1;
};
