/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
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

const result = mergeTwoLists(n3, n6);
console.log(result);
