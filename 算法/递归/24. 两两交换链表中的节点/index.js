/**
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 递归做法
 * 1. 首先，我们交换列表中的前两个节点，也就是 head 和 head.next；
 * 2. 然后我们以 swap(head.next.next) 的形式调用函数自身，以交换头两个节点之后列表的其余部分。
 * 3. 最后，我们将步骤（2）中的子列表的返回头与步骤（1）中交换的两个节点相连，以形成新的链表。
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
  if (!head) return null;

  // 新头部
  let newHead = null;

  // 递归子问题的新头部
  const nextHead = swapPairs(head.next && head.next.next);

  // 交换当前节点和下一个节点，并且下一个节点指向递归子问题的头部
  newHead = head.next;

  // 如果下一个节点不存在，就代表没可以交换的，直接返回头直接
  if (!newHead) return head;

  newHead.next = head;
  head.next = nextHead;

  // 返回新头部指针
  return newHead;
};
