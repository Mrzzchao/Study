/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
  const vitualHead = new ListNode(null);

  const queue = [];
  let curr = head;
  while (curr) {
    queue.push(curr);
    curr = curr.next;
  }

  let i = 0;
  let j = queue.length - 1;

  let newList = vitualHead;
  while (i <= j) {
    newList.next = queue[i];
    newList = newList.next;
    newList.next = queue[j];
    newList = newList.next;
    newList.next = null;
    i++;
    j--;
  }

  return vitualHead.next;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = reorderList;
// @after-stub-for-debug-end
