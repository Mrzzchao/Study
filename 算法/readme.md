## 递归

- 确定大问题
- 确定子问题
- 确定边界



### 全排列

- 大问题
  - 每次取排列中的一个当第一个个
  - 其余进行全排列
- 子问题
  - 每次排除第一个

```
[1,2,3,4,5]

只有一个全排列
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





## DFS





## 题目

### 43 Multiply Strings 解法



### 三数之和

1. 排序

2. 首尾两个指针 一个计数器 一个记录数组
3. 左指针+右指针 > 0 ：右指针左移动
4. 左指针+右指针 < 0 ：左指针右移动 arr.push(左、右)
5. 左指针+右指针 = 0 :   arr.push(左)
6. 右指针左移 重复3 - 5 直到 左 = 右

