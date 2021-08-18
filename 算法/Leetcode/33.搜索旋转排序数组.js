/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 6 7 8 9 10 11 1 2 3 4 5 -- 7
 * 二分法
 * nums[mid] > nums[0] 说明 旋转点mid -- high;
 *  如果target > nums[mid] && target <= nums[high]；
 *    那就在这里面二分 low = mid + 1;即可
      否则 high = mid - 1

 * nums[mid] < nums[0] 说明旋转点在 0 - mid中
 *  如果target < nums[mid] && target >= nums[0]；
 *    那就在这里面二分 high = mid - 1;即可
      否则 low = mid + 1
 */
const search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] >= nums[0]) {
      if (target >= nums[0] && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};
// @lc code=end
