

## 我的学习整理

[我的幕布](https://share.mubu.com/doc/1rY45-19b8_)

[二叉树题目](https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/x63shc/)



## 递归

- 确定大问题
- 确定子问题
- 确定边界



### 全排列

- 大问题
  - 每次取排列中的一个当第一个
  - 其余进行全排列
- 子问题
  - 每次排除第一个

```
[1,2,3,4,5]

一个全排列
[1]

有两个全排列
[1,2]
[2,1]

有三个全排列
[3, 1, 2]
[3, 2, 1]
```



## 滑动窗口

- 两个指针
- 滑动窗口

```
int left = 0, right = 0;
while (right < s.size()) {
    window.add(s[right]);
    right++;
    
    while (valid) {
        window.remove(s[left]);
        left++;
    }
}
```

[https://github.com/Alex660/Algorithms-and-data-structures/blob/master/demos/%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A311%E9%81%93.md](https://github.com/Alex660/Algorithms-and-data-structures/blob/master/demos/滑动窗口11道.md)



## 分治

```
分治法所能解决的问题一般具有以下几个特征：
1) 该问题的规模缩小到一定的程度就可以容易地解决
2) 该问题可以分解为若干个规模较小的相同问题，即该问题具有最优子结构性质。（前提）
3) 利用该问题分解出的子问题的解可以合并为该问题的解；（最关键的一点）
4) 该问题所分解出的各个子问题是相互独立的，即子问题之间不包含公共的子子问题。
```

[算法设计之五大常用算法设计方法总结](https://blog.csdn.net/zolalad/article/details/11393915)



## 树

### 前、中、后序遍历

- 通过递归遍历整棵树
- 前就是根->左->右
- 中就是左->根->右
- 后就是左->右->根
- 所以其实他们的遍历代码就是一行的区别。对当前的节点的操作顺序区别。



###  层序遍历

 - 先把根结点放入队列
 - 取出队列第一节点，判断左右树根是否为空，如果不为空，则放入队列
 - 取出的节点可以做任何操作
 - 继续循环1-3，直至队列为空



###  路径总和

**递归**

 - 子问题：子树路径总和sum - root.val
 - 所以递归左子树和右子树即可
 - 遇到叶子结点判断是否相等



### Leetcode题目

#### 101. 对称二叉树

```js
/**
 * 1. 利用层序遍历
 * 2. 前后双子针，一个从前扫，一个从后扫
 * 3. 对比两个子针对应的值是否相等
 * 4. 如果整颗树遍历完了都相等，则就是对称二叉树
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
  if (!root) return true;
  return check(root.left, root.right);
};

function check(left, right) {
  // 辅助队列，做层序遍历
  const queue = [left, right];

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i += 2) {
      // 双子针，一个指向从左边扫，一个从右边扫
      const left = queue.shift();
      const right = queue.shift();

      if ((!left && right) || (left && !right)) return false;

      if (left && right) {
        if (left.val !== right.val) {
          return false;
        }

        // 插入的时候按最左边、最右边向中间逼近的原则插入
        queue.push(left.left, right.right); // 推入下一层的一对节点
        queue.push(left.right, right.left); // 推入下一层的一对节点
      }
    }
  }

  return true;
}

/**
 * 递归的方式去做
 * 1. 满足对称代表，他的左子树和右子树都满足对称
 * @param {*} root 根结点
 */
const isSymmetric2 = function (root) {
  function check(left, right) {
    if (!left && !right) {
      return true;
    }

    if (left && right) {
      return (
        left.val === right.val && check(left.left, right.right) && check(left.right, right.left)
      );
    }

    return false;
  }

  if (!root) {
    return true;
  }

  return check(root.left, root.right);
};

```





#### 102. 二叉树的层序遍历

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 1. 先把根结点放入队列
 * 2. 取出根节点，判断左右树根是否为空，如果不为空，则放入队列
 * 3. 继续循环1-2，直至队列为空
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return [];
  // 存取遍历的节点
  const queue = [root];

  // 结果
  const result = [];

  while (queue.length) {
    // 当前层的临时数组，为了把当层的所有节点全部清空
    const tmp = [];
    const size = queue.length;

    // 遍历当前层
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      tmp.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(tmp);
  }
  return result;
};

```



#### 104. 二叉树的最大深度

```js
/**
 * 1. 根节点的最大深度是max(l, r) + 1 左子树和右子树最大深度的最大值+1
 * 2. 所以递归解决子问题即可
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
  let maxDepth = 0;

  function dfs(node) {
    if (!node) return 0;

    const leftDepth = dfs(node.left);
    const rightDepth = dfs(node.right);

    const currentNodeMaxDepth = Math.max(leftDepth, rightDepth) + 1;

    maxDepth = Math.max(maxDepth, currentNodeMaxDepth);

    return currentNodeMaxDepth;
  }

  dfs(root);

  return maxDepth;
};
```





#### 105. 从前序与中序遍历序列构造二叉树

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * 1. 前序遍历是中、左、右。所以第一个节点就是根节点
 * 2. 中序遍历是左、中、右。中节点的左边是左子树，右边是右子树。
 * 3. 通过中序数组就知道左子树的节点范围、节点个数
 * 4. 然后通过节点个数就知道左子树和右子树在前序数组的节点范围
 * 5. 接着就是子问题了
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  if (inorder.length === 0) return null;

  // 根结点就是前序数组第一个节点
  const rootVal = preorder[0];

  const root = new TreeNode(rootVal);

  // 根结点在中序数组中的索引
  const rootIndex = inorder.indexOf(rootVal);

  // 左子树节点个数
  const leftTreeLen = rootIndex + 1;

  // 左子树 [1,2,3,4,5].slice(0, 3) = [1,2,3]
  root.left = buildTree(preorder.slice(1, leftTreeLen), inorder.slice(0, rootIndex));

  // 右子树
  root.right = buildTree(preorder.slice(leftTreeLen), inorder.slice(leftTreeLen));

  return root;
};

const inorder = [1, 2, 3, 4];
const postorder = [4, 3, 2, 1];

const tree = buildTree(postorder, inorder);
console.log(tree);

```





#### 106. 从中序与后序遍历序列构造二叉树

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 1. 后序数组的最后一个节点是树的根结点
 * 2. 那在中序数组里，根节点左边是左子树，右边是右子树
 * 3. 那就知道左子树的节点个数
 * 4. 那就可以知道中序数组、后序数组，左子树和右子树的节点范围了
 * 5. 之后就是子问题了
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const buildTree = function (inorder, postorder) {
  // 存取树节点和中序数组索引的映射，为了查出根结点的位置
  const map = {};

  inorder.forEach((num, idx) => {
    map[num] = idx;
  });

  /**
   * 递归构建树
   * @param {number} iStart 在中序数组里面的起始索引
   * @param {number} iEnd 在中序数组里面的结束索引
   * @param {number} pStart 在后序数组里面的起始索引
   * @param {number} pEnd 在后序数组里面的结束索引
   */
  function helper(iStart, iEnd, pStart, pEnd) {
    // 递归边界
    if (iStart > iEnd || pStart > pEnd) {
      return null;
    }
    // 根结点
    const rootVal = postorder[pEnd];

    // 根结点在中序数组的索引
    const iRootIndex = map[rootVal];

    // 左子树节点个数
    const leftTreeLen = iRootIndex - iStart;

    // 根节点构建二叉树
    const root = new TreeNode(rootVal);

    // 构建左子树
    root.left = helper(iStart, iRootIndex - 1, pStart, pStart + leftTreeLen - 1);
    // 构建右子树
    root.right = helper(iRootIndex + 1, iEnd, pStart + leftTreeLen, pEnd - 1);

    return root;
  }

  return helper(0, inorder.length - 1, 0, postorder.length - 1); // 递归的入口
};
```



#### 112. 路径总和

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 1. 利用先序遍历，每一次遍历加上当前值
 * 2. 当是叶子节点时，判断和是否等于目标值
 * 3. 等于返回true 全部遍历完没有返回false
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
  const sum = 0;

  function dfs(node, preSum = 0) {
    if (!node) return;
    const sum = preSum + node.val;
    console.log('sum', sum);
    if (!node.left && !node.right && sum === targetSum) {
      return true;
    }
    return dfs(node.left, sum) || dfs(node.right, sum);
  }

  return !!dfs(root, 0);
};

/**
 * 递归做法
 * 1. 当前问题等于sum - node.val的左子树问题和右子树问题
 * 2. 所以递归左子树和右子树。hasPathSum2(root.left, targetSum - root.val)
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum2 = function (root, targetSum) {
  if (!root) return false;

  // 遇到叶子节点的时候判断
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  // 左子树问题和右子树问题
  return (
    hasPathSum2(root.left, targetSum - root.val) || hasPathSum2(root.right, targetSum - root.val)
  );
};
```



#### 116. 填充每个节点的下一个右侧节点指针

```js
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * 1. 大框架使用层序遍历
 * 2. 层序遍历时，节点N.next = N+1
 * @param {Node} root
 * @return {Node}
 */
const connect = function (root) {
  const queue = [root];
  const index = 0;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      // 取出一个节点
      const node = queue.shift();

      // 链接节点，除了最后一个。此时第一个节点就是下一个节点
      if (i < size - 1) {
        node.next = queue[0];
      }

      // 插入下一层节点
      if (node && node.left) {
        queue.push(node.left);
      }
      if (node && node.right) {
        queue.push(node.right);
      }
    }
  }
  console.log('root', root);
  return root;
};

```







#### 144. 二叉树的前序遍历

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 前序遍历就是遍历根->左子树->右子树
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
  // 遍历结果
  const result = [];

  function search(node) {
    if (node) {
      // 边界情况就是节点为空，中序就是把推入数组放在遍历左和右中间，后序同理。
      result.push(node.val);

      // 遍历左子树
      search(node.left);

      // 遍历右子树
      search(node.right);
    }
  }

  search(root);

  return result;
};
```



#### 236. 二叉树的最近公共祖先

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 1.后序遍历
 * 2.一个节点是最近祖先，代表，包含自己的左、右子树各有一个节点匹配
 * 3.那子问题就是：左子树问题和右子树问题
 * @param {TreeNode} root 树
 * @param {TreeNode} p 节点1
 * @param {TreeNode} q 节点2
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  // 边界条件
  if (root === p || root === q) {
    return root;
  }
  const leftMatch = lowestCommonAncestor(root.left, p, q);
  const rightMatch = lowestCommonAncestor(root.right, p, q);

  // 若左右子树各一个，就是祖先。由于是后序遍历，由下至上。只要匹配，就是最近祖先
  if (leftMatch && rightMatch) {
    return root;
  }
  // 左子树匹配。右子树不匹配。则左孩子就是最近点
  if (leftMatch) {
    return leftMatch;
  }
  // 右子树匹配。左子树不匹配。则右孩子就是最近点
  if (rightMatch) {
    return rightMatch;
  }
};

```



#### 297. 二叉树的序列化与反序列化

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * Encodes a tree to a single string.
 *1. 先序遍历，为了很容易定位根结点
 *2. 每一个遍历点+左子树的遍历序列+右子树的遍历序列
 *3. 子问题就是左子树的序列和右子树的序列
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
  if (root === null) {
    return 'X';
  }

  const left = serialize(root.left);
  const right = serialize(root.right);

  return `${root.val},${left},${right}`;
};

/**
 * Decodes your encoded data to tree.
 * 0. 按先序遍历的逻辑去构建。那就复制操作路径即可。
 * 1. 编写一个buildTree的构建树函数，参数是构建的序列数组
 * 2. 每一次从序列化数组里面推一个节点出来。构建一个tree节点 root
 * 3. 如果root === X 就是边界
 * 4. 如果root不等于，那子问题是：去掉退出来的数组
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
  const list = data.split(',');

  const buildTree = (list) => {
    const rootVal = list.shift();

    if (rootVal === 'X') {
      return null;
    }

    const root = new TreeNode(rootVal);

    // 构建左子树
    root.left = buildTree(list);
    root.right = buildTree(list);

    return root;
  };

  return buildTree(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

```



## 链表

### Leetcode题目

#### [2. 两数相加](https://leetcode-cn.com/problems/add-two-numbers/)

```js
/**
 * https://leetcode-cn.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 递归方法
 * 1. 子问题：l1 + l2就等于 l1.next + l2.next + (l1 + l2) / 10
 * 2. 所以 只需要看当前节点是否进1 进1传给后面的节点即可
 * 3. 边界
 * i. 如果!l1 l1.next = l2 并继续递归
 * ii.如果!l2 结束递归
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  function handler(l1, l2, preNode, preNum = 0) {
    // 边界就是两个链表都遍历完了
    if (!l1 && !l2) {
      // 代表最后一位也进一了，需要新建一个节点，前置节点指向这个新节点
      if (preNum === 1) {
        const node = new ListNode(1);
        preNode.next = node;
      }
      return;
    }
    const l1Val = (l1 && l1.val) || 0;
    const l2Val = (l2 && l2.val) || 0;

    // 求和 两个节点 + 进位 取余数
    const sum = (l1Val + l2Val + preNum) % 10;

    // 进位 两个节点 + 进位 取整数
    const moreNum = parseInt((l1Val + l2Val + preNum) / 10, 10);

    // l1的下一个节点
    let l1Next = null;

    // 上一个节点指针
    preNode = l1 || l2;
    if (l1) {
      l1.val = sum;
      l1Next = l1.next;

      // 如果l1链表到最后一个节点，并且l2的下一个节点还在
      if (!l1.next && l2 && l2.next) {
        l1.next = l2.next;
        preNode = l2;
        l1Next = null;
      }
    } else if (l2) {
      l2.val = sum;
    }

    return handler(l1Next, l2 && l2.next, preNode, moreNum);
  }

  handler(l1, l2, null, 0);

  return l1;
};

```



#### [21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

```js
/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 递归做法
 * 1.大问题：如果l1.val <= l2.val。则代表l1第一个节点定下来了。反之l2亦然
 * 2.子问题：l1.next = mergeTwoLists(l1.next, l2)
 * 3.边界
 * i. l1为空 代表l1遍历完了，返回剩余的l2即可
 * ii. l2为空 代表l2遍历完了，返回剩余的l1即可
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
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

```



#### [61. 旋转链表](https://leetcode-cn.com/problems/rotate-list/)

```js
/**
 * https://leetcode-cn.com/problems/rotate-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 旋转向右移动，就可以理解成
 * 1.先将链表闭合成环
 * 2.找到相应的位置断开这个环，确定新的链表头和链表尾
 * 3.断开的位置就是从老头部节点遍历
 * 4.找到新的尾部，第 (n - k % n - 1) 个节点 ，新的链表头是第 (n - k % n) 个节点
 * 当k > n时 可以理解成环绕一圈，重新再来，所以是 k % n
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
  if (!head) return null;
  if (k === 0) return head;
  let curr = head;

  // 链表长度
  let n = 1;
  // 1. 取到尾节点，并指向头节点，形成环
  while (curr.next) {
    n = n + 1;
    curr = curr.next;
  }
  curr.next = head;

  // 索引下标
  let index = 1;
  let newCurr = head;
  while (index <= n - (k % n) - 1) {
    newCurr = newCurr.next;
    index = index + 1;
  }

  const newHead = newCurr.next;
  newCurr.next = null;

  return newHead;
};

```



#### 203. 移除链表元素

```js
/**
 * 1. 遍历链表
 * 2. 当node.val === val时
 *  i. 前节点指向后节点
 *  ii. 删除节点指向null
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * https://leetcode-cn.com/problems/remove-linked-list-elements/
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
  let curr = head;
  let pre = null;
  while (curr) {
    const { next } = curr;
    if (curr.val === val) {
      if (pre) {
        pre.next = curr.next;
        // 清空匹配节点的右指针指向
        curr.next = null;
      } else {
        // 如果前置指针不存在就代表删除的是头节点，头指针就要移动到后一个节点上
        head = next;
      }
    } else {
      pre = curr;
    }

    // 移动指针
    curr = next;
  }

  return head;
};

```



#### [234. 回文链表](https://leetcode-cn.com/problems/palindrome-linked-list/)

```js
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

```





#### [328. 奇偶链表](https://leetcode-cn.com/problems/odd-even-linked-list/)

```js
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

```



#### 707. 设计链表

```js
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
  if (index > this.len) return;
  if (index <= 0) {
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
  // 新节点右指针指向第index的节点
  newNode.next = node;
  // 新节点左指针指向第index的左节点
  newNode.pre = node.pre;

  // 第index的节点的左节点的右指针指向新节点
  node.pre.next = newNode;

  // 第index的节点的左指针指向新节点
  node.pre = newNode;

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
      // 尾指针指向上一个节点
      this.tail = node.pre;
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
const funcList = [
  'MyLinkedList',
  'addAtHead',
  'addAtTail',
  'deleteAtIndex',
  'addAtTail',
  'addAtIndex',
  'addAtIndex',
  'deleteAtIndex',
  'deleteAtIndex',
  'addAtTail',
  'addAtIndex',
  'addAtTail',
];
const paramsList = [[], [7], [0], [1], [5], [1, 1], [2, 6], [2], [1], [7], [1, 7], [6]];

function run() {
  funcList.forEach((item, idx) => {
    linkedList[item] && linkedList[item].apply(linkedList, paramsList[idx]);
  });
}

run();
// linkedList.addAtHead(7);
// linkedList.addAtHead(2);
// linkedList.addAtHead(1);
// linkedList.addAtIndex(3, 0);
// linkedList.deleteAtIndex(2);
// linkedList.addAtHead(6);
// linkedList.addAtTail(4);
// linkedList.get(4);
// linkedList.addAtIndex(5, 0);
// linkedList.addAtHead(6);

```





## 资源

[题目参看](https://github.com/SASUKE40/leetcode)

