

## 我的学习整理

[我的幕布](https://share.mubu.com/doc/1rY45-19b8_)



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



### Leetcode题目

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






## 题目

### 三数之和

1. 排序

2. 首尾两个指针 一个计数器 一个记录数组
3. 左指针+右指针 > 0 ：右指针左移动
4. 左指针+右指针 < 0 ：左指针右移动 arr.push(左、右)
5. 左指针+右指针 = 0 :   arr.push(左)
6. 右指针左移 重复3 - 5 直到 左 = 右







## 资源

[题目参看](https://github.com/SASUKE40/leetcode)

