/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 双指针 left、right。因为是递增序列
 * 如果nums[left] + nums[right] < target: left++。反之，right--
 */
const twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [nums[left], nums[right]];
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};
