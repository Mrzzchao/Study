/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * mp: 以和为键，出现次数为对应的值
 * pre: 前缀和
 * count: 匹配次数
 */
const subarraySum = function (nums, k) {
  const mp = new Map();
  mp.set(0, 1);
  let count = 0;
  let pre = 0;
  for (const x of nums) {
    pre += x;
    if (mp.has(pre - k)) {
      count += mp.get(pre - k);
    }
    if (mp.has(pre)) {
      mp.set(pre, mp.get(pre) + 1);
    } else {
      mp.set(pre, 1);
    }
  }
  return count;
};
// @lc code=end
