/**
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * 1. 遍历链表，保存节点值到数组中
 * 2. 用数组首尾双指针的方式进行判断
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  // 节点数组
  const arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] != arr[j]) {
      return false;
    }
  }

  return true;
};
