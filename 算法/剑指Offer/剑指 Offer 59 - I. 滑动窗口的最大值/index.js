/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  if (nums.length === 0) return [];
  const result = [];
  for (let i = 0; i <= nums.length - k; i++) {
    const windowNums = nums.slice(i, i + k);
    result.push(Math.max(...windowNums));
  }

  return result;
};
