/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const node = new ListNode('head');
  let tmp = node;

  let add = 0;
  let sum = 0;

  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;

    tmp.next = new ListNode(sum % 10);

    tmp = tmp.next;
    add = sum >= 10 ? 1 : 0;

    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }

  add && (tmp.next = new ListNode(add));

  return node.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const n1 = new ListNode(5, null);
const n2 = new ListNode(4, n1);
const n3 = new ListNode(2, n2);

const n4 = new ListNode(5, null);
const n5 = new ListNode(6, n4);
const n6 = new ListNode(5, n5);

const result = addTwoNumbers(n1, n4);
console.log(result);
