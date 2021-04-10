/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }

    if (map[nums[i]] > nums.length / 2) {
      return nums[i];
    }
  }
};
