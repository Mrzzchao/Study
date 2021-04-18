/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 双指针
 * 因为[1,2,5,7]和[9,10,8,5,7]公共部分是[5,7]
 * 如果headA的指针pA、headB的指针pB一起遍历到各自的尾部后，依次再遍历另外一个。
 * 对于pA来说就是[1,2,5,7,9,10,8,5,7]。
 * 对于pB来说就是[9,10,8,5,7,1,2,5,7]。
 * 可以看到其实他们有公共部分[1,2,5,7,9,10,8]和[9,10,8,5,7,1,2]。去掉公共部分[5,7以后]。就是两边剩余的部分合集了，除了顺序不一样。
 * 那最后这部分遍历完以后，必定就会遍历到公共部分[5,7]。第一个相等的就是我们想要结果
 */
const getIntersectionNode = function (headA, headB) {
  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }
  return pA;
};
