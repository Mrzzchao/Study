/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * [1, 2, 3] 输出 [1, 3, 2]
 * [1,2,3,5,4,2,1]
 * 简单发现，下一个更大的就是从数组最后一直向前找，直到找到第一个比nums[i] > nums[i+1]的。
 * 然后在nums[i+1...n]中找到最后一个比nums[i]大的，进行交换
 * 因为就算交换了 后面也是降序 把后面反转下就是更小一些了
 */
const nextPermutation = function (nums) {
  let currMax = Number.MIN_SAFE_INTEGER;
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  let isMatch = false;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] >= currMax) {
      currMax = nums[i];
    } else {
      // 找到了
      leftIndex = i;
      isMatch = true;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] > nums[i]) {
          rightIndex = j;
        }
      }
      break;
    }
  }

  if (!isMatch) {
    nums = nums.sort((a, b) => a - b);
    return;
  }

  swap(nums, leftIndex, rightIndex);
  reverse(nums, leftIndex + 1, nums.length - 1);
  function swap(nums, i, j) {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }

  function reverse(nums, start, end) {
    while (start < end) {
      const tmp = nums[start];
      nums[start] = nums[end];
      nums[end] = tmp;

      start++;
      end--;
    }
  }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = nextPermutation;
// @after-stub-for-debug-end
