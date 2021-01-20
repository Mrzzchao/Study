

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
      // 边界情况就是节点为空
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

