

## 我的学习整理

[我的幕布](https://share.mubu.com/doc/1rY45-19b8_)

[二叉树题目](https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/x63shc/)

## 基本理论



### 递归

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



### 滑动窗口

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



### 分治

```
分治法所能解决的问题一般具有以下几个特征：
1) 该问题的规模缩小到一定的程度就可以容易地解决
2) 该问题可以分解为若干个规模较小的相同问题，即该问题具有最优子结构性质。（前提）
3) 利用该问题分解出的子问题的解可以合并为该问题的解；（最关键的一点）
4) 该问题所分解出的各个子问题是相互独立的，即子问题之间不包含公共的子子问题。
```

[算法设计之五大常用算法设计方法总结](https://blog.csdn.net/zolalad/article/details/11393915)



## 剑指Offer

#### 04. 二维数组中的查找

```js
/**
 * https://leetcode-cn.com/leetbook/read/illustrate-lcof/xs5w4d/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 以左下角为坐标轴
 * target < 坐标轴 坐标右移
 * target > 坐标轴 坐标上移
 */
// @lc code=start
const findNumberIn2DArray = function (matrix, target) {
  if (!matrix.length) return false;
  let x = matrix.length - 1;
  let y = 0;
  while (x >= 0 && y < matrix[0].length) {
    if (matrix[x][y] === target) {
      return true;
    }
    if (matrix[x][y] > target) {
      x = x - 1;
    } else {
      y = y + 1;
    }
  }
  return false;
};

const matrix = [
  [1, 4],
  [2, 5],
];
const target = 2;

console.log(findNumberIn2DArray(matrix, target));

```







## 动态规划

### Leetcode题目

#### 53.最大子序和

```js
/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * dp[i]: 以nums[i]结尾连续的最大和
 * base case: dp[0] = nums[0]
 * 状态转移公式：dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
 */
const maxSubArray = function (nums) {
  // base case
  const dp = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
  }

  return Math.max(...dp);
};
// @lc code=end

```



#### [72. 编辑距离](https://leetcode-cn.com/problems/edit-distance/)

```js
/**
 * https://leetcode-cn.com/problems/edit-distance/
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 *
 * 递归做法
 * 递归函数 dp(i, j): word1[0...i]与word2[0...j]字符串的最小编辑距离
 * base case: i === -1 or j === -1
 * 子问题（从word1变成word2）:
 * dp(i, j - 1) 新增
 * dp(i - 1, j) 删除
 * dp(i - 1, j - 1) 替换
 */
const minDistance = function (word1, word2) {
  // 做递归缓存的,减少递归次数
  const memory = {};

  function dp(i, j) {
    const match = memory[[i, j].toString()];
    if (match) {
      return match;
    }
    console.log('dp');
    // base case: 如果任何一个字符串遍历完了，就代表新增或者删除剩余字符串个
    if (i === -1) return j + 1;
    if (j === -1) return i + 1;

    // 相等就无事发生，继续比较下一个
    if (word1[i] === word2[j]) {
      return getDp(i - 1, j - 1);
    }
    return Math.min(getDp(i, j - 1) + 1, getDp(i - 1, j) + 1, getDp(i - 1, j - 1) + 1);
  }

  function getDp(i, j) {
    const match = memory[[i, j].toString()];
    if (match) {
      return match;
    }
    memory[[i, j].toString()] = dp(i, j);

    return memory[[i, j].toString()];
  }

  return dp(word1.length - 1, word2.length - 1);
};

/*
 * 动态规划
 * dp函数 dp[i][j]: word1[0...i]与word2[0...j]字符串的最小编辑距离
 * base case: i === word1.lenth or j === word2.lenth。
 * 状态: i, j
 * 选择: word1、word2的新增、删除、替换。分别对应i，j的变化
 * 状态转移方程: dp[i, j] = min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1])
 * dp[i][j - 1] 新增
 * dp[i - 1][j] 删除
 * dp[i - 1][j - 1] 替换
 */
const minDistance2 = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // dp[i][j]: word1[0...i]与word2[0...j]字符串的最小编辑距离
  const dp = [];

  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n);
  }

  // base case：dp[0][0] 最小编辑就是0
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // 相等的话 最小编辑距离就等于之前的字符
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          Math.min(
            dp[i][j - 1], // 新增
            dp[i - 1][j], // 删除
            dp[i - 1][j - 1] // 替换
          ) + 1;
      }
    }
  }

  return dp[m][n];
};

const arr = ['horse', 'ros'];

console.log(minDistance2(arr[0], arr[1]));

```



#### 152.乘积最大子数组

```js
/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * dp[i]: 以nums[i]结尾的最大连续乘积
 * dpMin[i]: 以nums[i]结尾的最小连续乘积
 * base case: dp[0] = nums[0]
 * 状态转移: dp[i] = Math.max(nums[i], nums[i] * dp[i - 1])
 * 但是发现有个问题，如果遇到nums[i]为负数的情况，就不会计算。但是两个负数相乘就会更大
 * 所以新的状态转移方程：dp[i] = Math.max(nums[i], nums[i] * dp[i - 1], nums[i] * dpMin[i - 1])
 */
const maxProduct = function (nums) {
  // base case
  const dp = [nums[0]];
  const dpMin = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], nums[i] * dp[i - 1], nums[i] * dpMin[i - 1]);
    dpMin[i] = Math.min(nums[i], nums[i] * dp[i - 1], nums[i] * dpMin[i - 1]);
  }

  return Math.max(...dp);
};
// @lc code=end

```



#### [300. 最长递增子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)

```js
/**
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 * 状态转移公式：dp[i]=max(dp[j])+1,其中0≤j<i且num[j]<num[i]
 * 所以最长就是：max(dp[i]),其中0≤i<n
 */
const lengthOfLIS = function (nums) {
  // 最长结果
  let maxLen = 1;

  // 动态数组，dp[i]代表第i个结尾最长的序列长度。所以第一个长度就是1
  const dp = [1];
  for (let i = 1; i < nums.length; i++) {
    // 设置一个默认最大值，至少上升就是本身，就是1
    dp[i] = 1;

    for (let j = 0; j < i; j++) {
      // 如果第j个小于第i个，则满足条件，对比第几个最长+1和当前记录第i个最长的大小，取最大
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    // 每一轮循环都比较当前dp[i]是否是最大的
    maxLen = Math.max(maxLen, dp[i]);
  }

  return maxLen;
};

```



#### [322. 零钱兑换](https://leetcode-cn.com/problems/coin-change/)

```js
/**
 * https://leetcode-cn.com/problems/coin-change/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 动态规划
 * 1.base case：amount = 0
 * 2.状态：只有金额会变 所有也是amount
 * 3.选择-就是导致状态变化的行为：要使金额变化，那就是要拿走钱币，所以是coins
 * 4.dp[n]：dp[n]=金额为n，需要最少的钱币数量
 */
const coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  // base case
  dp[0] = 0;

  for (let i = 0; i <= amount; i++) {
    coins.forEach((coin) => {
      if (i - coin >= 0) {
        // dp[i] 为dp[i]与i-coin金额的金币数量加上coin这一枚
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    });
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

```



#### [354. 俄罗斯套娃信封问题](https://leetcode-cn.com/problems/russian-doll-envelopes/)

```js
/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 * 动态规划
 * 1. 先排序。排序规则是先按宽度升序，宽度相同降序（为了避免宽度相同当作可以装了），然后高度升序。
 * 2. 把高度用最长递增子序列的逻辑去做。
 */
const maxEnvelopes = function (envelopes) {
  // 排序
  envelopes = envelopes.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });

  // 以第i 个信封结尾最大的可装树
  const dp = new Array(envelopes.length).fill(1);
  // 最长装数
  let maxLen = 1;

  for (let i = 1; i < envelopes.length; i++) {
    for (let j = 0; j < i; j++) {
      // 满足条件
      if (envelopes[j][1] < envelopes[i][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    maxLen = Math.max(maxLen, dp[i]);
  }

  return maxLen;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = maxEnvelopes;
// @after-stub-for-debug-end

```







#### [494. 目标和](https://leetcode-cn.com/problems/target-sum/)

```js
/**
 * https://leetcode-cn.com/problems/target-sum/
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 * 前序遍历问题
 * 左子树是+，右子树是-
 */
const findTargetSumWays = function (nums, S) {
  let result = 0;
  function caculator(nums, sum, i) {
    if (i === nums.length) {
      if (sum === S) {
        result = result + 1;
      }
      return;
    }

    caculator(nums, sum - nums[i], i + 1);
    caculator(nums, sum + nums[i], i + 1);
  }

  caculator(nums, 0, 0);

  return result;
};

```





#### [509. 斐波那契数](https://leetcode-cn.com/problems/fibonacci-number/)

```js
/**
 * https://leetcode-cn.com/problems/fibonacci-number/
 * @param {number} n
 * @return {number}
 * 动态规划
 * 1.base case： f(n) = 1。n=1,2；
 * 2.状态(原问题和子问题中变化的量)：只有n是变化的
 * 3.dp[i]：代表n=i时的值，所以dp[0]、dp[1] = 1;
 */
const fib = function (n) {
  if (n <= 0) return 0;
  const dp = [1, 1];

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[dp.length - 1];
};

// 其实就两个状态，当前值和上一个值，所以可以状态压缩
const fib2 = function (n) {
  if (n < 1) return 0;
  let pre = 1;
  let curr = 1;
  let next;

  for (let i = 3; i <= n; i++) {
    next = pre + curr;
    pre = curr;
    curr = next;
  }

  return curr;
};

```



#### 516. 最长回文子序列

```js
/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * dp[i][j]: s[i...j]中最长回文串的长度。
 * 状态：i和j
 * 选择：子串的选择
 * 状态转移公式
 * s[i] = s[j]:dp[i][j] = dp[i + 1][j - 1] + 2; 就是他们子串最大回文长度+当前两个字符
 * s[i] != s[j]: dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
 *
 * base case: dp[i][i] = 1; 0 <= i < s.length; 也就是所有单字符都是回文串
 */
const longestPalindromeSubseq = function (s) {
  const n = s.length;
  const dp = new Array(n);

  // base case
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(0);
    dp[i][i] = 1;
  }

  // 由于是依赖i+1,j-1。所以i从尾部开始。j从i开始，因为j需要大于i
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][n - 1];
};
// @lc code=end

```







#### 583. 两个字符串的删除操作

```js
/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * 动态规划
 * dp[i][j]: word1[0...i]与word2[0...j]的最小删除操作
 * 状态: i和j的变化
 * 选择: 删除word1[i] 删除word2[j]
 * 状态转移方程
 * word1[i] !== word2[j]: dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1
 * dp[i - 1][j] 删除word1[i]
 * dp[i][j - 1] 删除word2[j]
 * dp[i - 1][j - 1] 删除word1[i]、删除word2[j] 这个就不用了。1 前两个包含了。2.删除两个一定最大。3.还可以避免两个单字符的对比
 *
 * base case dp[0][j] = j dp[i][0] = i
 */
const minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n);
  }

  // base case：dp[0][0]:就是0,dp[0][j] j有多少个就删除多少个，dp[i][0]同理
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] !== word2[j - 1]) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      } else {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[m][n];
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = minDistance;
// @after-stub-for-debug-end

```





#### [673. 最长递增子序列的个数](https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/)

```js
/**
 * https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 * 动态规划
 * dp[i]: nums[i]结尾的最长递增长度
 * count[i]: nums[i]结尾的最长递增组合数。
 * 第一层循环：1 < i < nums.length 遍历数组，计算dp[i]
 * 第二层循环：0 < j < i 遍历nums[i]结尾的组合，计算count[i]
 *
 */
const findNumberOfLIS = function (nums) {
  const len = nums.length;

  // base case
  const dp = new Array(len).fill(1);
  const count = new Array(len).fill(1);

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      // 满足递增条件
      if (nums[i] > nums[j]) {
        // 第一次找到：如果0...i范围内有一个以这个范围结尾的数的dp[j]加上nums[i]大于现有的dp[i]，那就去这个值
        // 并且组合数直接等于这个
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[j] + 1 === dp[i]) {
          // 长度等于dp[i]，那就是匹配组合，直接加上当前的组合数
          count[i] += count[j];
        }
      }
    }
  }

  // 当前递增最长长度
  const max = Math.max(...dp);

  let res = 0;
  for (let i = 0; i < len; i++) {
    if (dp[i] === max) {
      // 累加满足长度为最大的组合数
      res += count[i];
    }
  }

  return res;
};
```



#### 1143. 最长公共子序列

```js
/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * 动态规划
 * dp[i][j]: text1[0...i - 1] text2[0...j - 1]最长公共子序列
 * 状态转移方程：
 * text1[i - 1] === text2[j - 1]: dp[i][j] = dp[i - 1][j - 1] + 1;
 * text1[i - 1] !== text2[j - 1]: dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
 * base case: 就是找不到能匹配的dp[0...n][0...m] = 0
 */
const longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        // 相等就取前面子串的长度+1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // 如果不相等，取三种子串中最大的
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
};
// @lc code=end

longestCommonSubsequence('abcde', 'ace');

```





## 字符串

### Leetcode题目

#### [344. 反转字符串](https://leetcode-cn.com/problems/reverse-string/)

```js
/**
 * https://leetcode-cn.com/problems/reverse-string/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 递归的方法
 * 1. 定义一个helper函数，作用是
 *  i.交换s[start]、s[end]
 *  ii. 继续递归剩余的s(start + 1, end - 1)的字符串
 * 2. base case是start >= end
 *
 */
const reverseString = function (s) {
  function helper(start, end, s) {
    if (start >= end) return;

    const tmp = s[start];
    s[start] = s[end];
    s[end] = tmp;

    helper(start + 1, end - 1, s);
  }

  helper(0, s.length - 1, s);
};

const result = reverseString('123456');

console.log(result);

```





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



#### [226. 翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)

```js
/**
 * https://leetcode-cn.com/problems/invert-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 递归做法
 * 1. base case root === null；
 * 2. 原问题：翻转root树
 * 3. 子问题：翻转root.left和root.right
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (!root) return null;

  // 后序遍历
  const left = invertTree(root.left);
  const right = invertTree(root.right);

  // 翻转逻辑
  root.left = right;
  root.right = left;

  return root;
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



#### [652. 寻找重复的子树](https://leetcode-cn.com/problems/find-duplicate-subtrees/)

```js
/**
 * https://leetcode-cn.com/problems/find-duplicate-subtrees/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归做法
 * 1. 定一个map 利用二叉树的序列化算法统计出所有序列的值 一次递归记为map[name]++。
 * 2. 如果在递归时，map[name] === 2 说明已经重复了，就记录在结果数组里面
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function (root) {
  // 结果数组
  const result = [];

  // 序列化映射
  const map = {};

  // 序列化算法
  function serialize(root) {
    if (root === null) {
      return 'X';
    }

    const left = serialize(root.left);
    const right = serialize(root.right);

    // 记录在序列化映射表里
    const name = `${root.val},${left},${right}`;
    if (map[name]) {
      map[name] = map[name] + 1;
    } else {
      map[name] = 1;
    }

    // 值等于2 满足重复条件 新增进结果列表
    if (map[name] === 2) {
      result.push(root);
    }

    return name;
  }

  serialize(root);

  return result;
};

```



#### [654. 最大二叉树](https://leetcode-cn.com/problems/maximum-binary-tree/)

```js
/**
 * https://leetcode-cn.com/problems/maximum-binary-tree/
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
 * 递归做法
 * 1. 用先序遍历
 * 2. 每一次遍历找到数组中最大的值，并记录索引为index，然后新建一个root节点。
 * 3. 然后
 * i. 左子树：root.left = constructMaximumBinaryTree(nums.slice(0, index))
 * ii.右子树：root.right = constructMaximumBinaryTree(nums.slice(index))
 * iii. return root
 * 4. base case是 nums.lenght === 0;
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = function (nums) {
  // base case: 数组为空
  if (nums.length === 0) return null;

  // 1. 找到数组中最大的值
  let max = Number.MIN_SAFE_INTEGER;
  let index;
  nums.forEach((num, idx) => {
    if (num > max) {
      max = num;
      index = idx;
    }
  });

  // 2. 新建最大节点
  const root = new TreeNode(max);

  root.left = constructMaximumBinaryTree(nums.slice(0, index));
  root.right = constructMaximumBinaryTree(nums.slice(index + 1));

  return root;
};

```



## 二叉搜索树

### Leetcode题目

#### [230. 二叉搜索树中第K小的元素](https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/)

```js
/**
 * https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归做法
 * 1. 使用中序遍历 中序是左 根 右 刚好是大小顺序
 * 2. 中序遍历 记录遍历的值 进 arr
 * 3. 所以第k小就是arr[k - 1]
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  const arr = [];

  function dfs(root) {
    if (root === null) return;
    dfs(root.left);
    arr.push(root.val);
    dfs(root.left);
  }

  dfs(root);

  return arr[k - 1];
};

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



#### [24. 两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

```js
/**
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 递归做法
 * 1. 首先，我们交换列表中的前两个节点，也就是 head 和 head.next；
 * 2. 然后我们以 swap(head.next.next) 的形式调用函数自身，以交换头两个节点之后列表的其余部分。
 * 3. 最后，我们将步骤（2）中的子列表的返回头与步骤（1）中交换的两个节点相连，以形成新的链表。
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
  if (!head) return null;

  // 新头部
  let newHead = null;

  // 递归子问题的新头部
  const nextHead = swapPairs(head.next && head.next.next);

  // 交换当前节点和下一个节点，并且下一个节点指向递归子问题的头部
  newHead = head.next;

  // 如果下一个节点不存在，就代表没可以交换的，直接返回头直接
  if (!newHead) return head;

  newHead.next = head;
  head.next = nextHead;

  // 返回新头部指针
  return newHead;
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



#### [114. 二叉树展开为链表](https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/)

```js
/**
 * https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 将以 root 为根的树拉平为链表
 * 递归做法：
 * 1. 将 root 的左子树和右子树拉平。
 * 2. 将 root 的右子树接到左子树下方，然后将整个左子树作为右子树。
 * 3. 后序遍历整棵树，然后
 * i. 将左子树作为右子树
 * ii. 将右子树链接到左子树
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function (root) {
  // base case
  if (!root) return null;

  flatten(root.left);
  flatten(root.right);

  /** ** 后序遍历位置 ****/
  // 1、左右子树已经被拉平成一条链表
  const { left } = root;
  const { right } = root;

  // 2、将左子树作为右子树
  root.left = null;
  root.right = left;

  // 3、将原先的右子树接到当前右子树的末端
  let p = root;
  while (p.right != null) {
    p = p.right;
  }
  p.right = right;
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

