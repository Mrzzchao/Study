// @lc code=start
/**
 * 二分法做，递归
 * 先找到匹配的位置，然后基于这个位置，从两边扩散找边界
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  const search = (left, right) => {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      return search(mid + 1, right);
    }
    return search(left, mid - 1);
  };

  const matchIndex = search(0, nums.length - 1);
  if (matchIndex === -1) {
    return [-1, -1];
  }
  let left = matchIndex;
  let right = matchIndex;
  while (nums[left - 1] === target) {
    left--;
  }
  while (nums[right + 1] === target) {
    right++;
  }

  return [left, right];
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = searchRange;
// @after-stub-for-debug-end
