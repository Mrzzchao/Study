/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  }
  return nums.filter((el) => el < target).length;
};

searchInsert([1, 3, 5, 6], 7);
