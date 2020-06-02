/**
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
var reverseList = function(head) {
    let pre = null
    let curr = head

    while (curr) {
        let tmp = curr.next

        curr.next = pre
        pre = curr

        curr = tmp
    }

    return pre
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const n1 = new ListNode(4, null)
const n2 = new ListNode(2, n1)
const n3 = new ListNode(1, n2)


const n4 = new ListNode(4, null)
const n5 = new ListNode(3, n4)
const n6 = new ListNode(1, n5)

const result = reverseList(n3)
console.log(result)