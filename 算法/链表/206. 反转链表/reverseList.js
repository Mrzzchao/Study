/**
 * 1. 顺序遍历链表
 * 2. 每遍历一个点，就将他的next指针指向
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  let pre = null;
  let curr = head;

  while (curr) {
    // 获取下一节点
    const tmp = curr.next;

    // 下一个节点的右指针指向前置指针
    curr.next = pre;

    // 前置指针指向当前节点
    pre = curr;

    // 当前指针指向下一节点
    curr = tmp;
  }

  return pre;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const n1 = new ListNode(4, null);
const n2 = new ListNode(2, n1);
const n3 = new ListNode(1, n2);

const n4 = new ListNode(4, null);
const n5 = new ListNode(3, n4);
const n6 = new ListNode(1, n5);

const result = reverseList(n3);
console.log(result);
