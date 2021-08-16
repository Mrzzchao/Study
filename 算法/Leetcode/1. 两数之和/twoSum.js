/**
 * 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 用对象的 hash来查找的效率会比数组便利高很多 所以这里就相当于利用了缓存的思想
const twoSum = function (nums, target) {
  const len = nums.length;
  const numObj = {};
  for (let i = 0; i < len; i++) {
    const current = nums[i];
    const match = target - current;
    if (match in numObj) {
      return [i, numObj[match]];
    }
    numObj[current] = i;
  }
};
