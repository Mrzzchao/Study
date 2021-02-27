/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 递归做法
 * 1.大问题：如果l1.val <= l2.val。则代表l1第一个节点定下来了。反之l2亦然
 * 2.子问题：l1.next = mergeTwoLists(l1.next, l2)
 * 3.边界
 * i. l1为空 代表l1遍历完了，返回剩余的l2即可
 * ii. l2为空 代表l2遍历完了，返回剩余的l1即可
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);

    return l1;
  }

  l2.next = mergeTwoLists(l1, l2.next);
  return l2;
};
