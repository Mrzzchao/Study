/**
 * https://leetcode-cn.com/problems/odd-even-linked-list/
 * 1. 设置3个指针
 * curr 指向当前轮询节点 起始值为 head
 * odd 指向当前奇数节点 起始值为 head
 * even 指向当前偶数节点 起始值为 head.next
 *
 * 2. 轮询链表，轮询序号为index，起始值为3，从第三个节点开始算
 * i. 当index为奇数时，odd.next = curr; odd = curr
 * ii. 当index为偶数时，even.next = curr; even = curr
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = function (head) {
  // 如果是空链表直接返回
  if (!head) return null;
  let curr = head;
  let odd = head;
  let even = head.next;
  const eventHead = head.next;

  // 判断奇偶的序号
  let index = 3;

  // 直接移动到第三个节点开始
  if (curr && curr.next && curr.next.next) {
    curr = curr.next.next;
  } else {
    return head;
  }

  while (curr) {
    // 偶数
    if (index % 2 === 0) {
      even.next = curr;
      even = curr;
    } else {
      // 奇数
      odd.next = curr;
      odd = curr;
    }

    curr = curr.next;
    index = index + 1;
  }
  console.log('index', index);

  // 偶指针指向空，奇数指针最后指向偶数的头指针
  even.next = null;
  odd.next = eventHead;

  return head;
};
