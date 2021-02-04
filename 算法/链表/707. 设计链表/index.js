/**
 * get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
  addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
  addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
  addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
  deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/design-linked-list
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * Initialize your data structure here.
 */
const MyLinkedList = function () {
  // 头指针
  this.head = null;
  // 尾指针
  this.tail = null;
  // 链表长度
  this.len = 0;
};

// 链表节点
const ListNode = function (val) {
  // 前置指针
  this.pre = null;
  // 值
  this.val = val;
  // 后置指针
  this.next = null;
};

/**
 * get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index > this.len - 1 || index < 0) return -1;
  let node = this.head;
  for (let i = 0; i < index; i++) {
    if (node.next) {
      node = node.next;
    }
  }
  console.log('val', node.val);
  return node.val;
};

/**
 * addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。
 * 插入后，新节点将成为链表的第一个节点。
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new ListNode(val);

  // 头指针为空，就代表链表为空，头尾指针都指向新节点
  if (this.head === null) {
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.pre = newNode;
  }
  this.head = newNode;
  this.len = this.len + 1;
};

/**
 *   addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new ListNode(val);
  // 头指针为空，就代表链表为空，头尾指针都指向新节点
  if (this.head === null) {
    this.head = newNode;
  } else {
    this.tail.next = newNode;
    newNode.pre = this.tail;
  }
  this.tail = newNode;
  this.len = this.len + 1;
};

/**
 * addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。
 * 如果 index 等于链表的长度，则该节点将附加到链表的末尾。
 * 如果 index 大于链表长度，则不会插入节点。
 * 如果index小于0，则在头部插入节点。
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.len - 1) return;
  if (index < 0) {
    return this.addAtHead(val);
  }
  if (index === this.len) {
    return this.addAtTail(val);
  }

  // 拿到索引为index的节点
  let node = this.head;
  for (let i = 0; i < index; i++) {
    if (node.next) {
      node = node.next;
    }
  }

  const newNode = new ListNode(val);
  newNode.next = node;
  node.pre.next = newNode;

  newNode.pre = node.pre;
  this.len = this.len + 1;
};

/**
 *   deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index > this.len - 1 || index < 0) {
    return;
  }

  // 拿到索引为index的节点
  let node = this.head;
  for (let i = 0; i < index; i++) {
    if (node.next) {
      node = node.next;
    }
  }

  // 如果只有一个节点，就直接清空
  if (this.len === 1) {
    this.head = null;
    this.tail = null;
    this.val = null;
  } else {
    // 如果是删除头节点
    if (index === 0) {
      this.head = node.next;
      node.next.pre = null;
    } else if (index === this.len - 1) {
      // 删除尾节点
      node.pre.next = null;
    } else {
      // 正常情况
      // 删除节点的左节点右指针指向删除节点的右节点
      node.pre.next = node.next;

      // 右节点前指针指向删除节点的左节点
      node.next.pre = node.pre;
    }
  }

  this.len = this.len - 1;

  // 清空删除节点的指针和值
  node.next = null;
  node.pre = null;
  node.val = null;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2); // 链表变为1-> 2-> 3
linkedList.get(1); // 返回2
linkedList.deleteAtIndex(1); // 现在链表是1-> 3
linkedList.get(1); // 返回3
