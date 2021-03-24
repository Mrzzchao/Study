/**
 * https://leetcode-cn.com/problems/sum-of-unique-elements/
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = function (nums) {
  // 记录是否存在
  const map = {};
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      // 第一次重复时，减去原先的值
      if (map[nums[i]] === 1) {
        sum = sum - nums[i];
      }
      map[nums[i]] = map[nums[i]] + 1;
    } else {
      sum = sum + nums[i];
      map[nums[i]] = 1;
    }
  }

  return sum;
};
