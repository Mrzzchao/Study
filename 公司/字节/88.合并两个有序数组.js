/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// const merge = function (nums1, m, nums2, n) {
//   for (let i = 0; i < n; i++) {
//     nums1[m + i] = nums2[i];
//   }

//   nums1.sort((a, b) => a - b);
// };

const merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  const sort = [];

  while (i < m || j < n) {
    let curr;
    if (i === m) {
      // nums1到末尾时候的处理，直接把nums2加进来即可
      curr = nums2[j];
      j++;
    } else if (j === n || nums1[i] < nums2[j]) {
      // 如果nums2遍历完，或者小于
      curr = nums1[i];
      i++;
    } else {
      curr = nums2[j];
      j++;
    }

    sort[i + j - 1] = curr;
  }

  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = sort[i];
  }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = merge;
// @after-stub-for-debug-end
