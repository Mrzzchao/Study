/**
 * @param {number[]} nums
 * @return {boolean}
 * 其实很简单
 * 1. 筛选出所有非零的数组
 * 2. 从而统计出零的数量
 * 3. 如果去重以后非零的数量 + 零的数量 = 原数组数量。就是连续的。
 */
const isStraight = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let countZero = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 0) {
      countZero++;
    } else {
      break;
    }
  }
  for (let i = countZero + 1; i < 5; i++) {
    // 重复的话 直接false
    if (nums[i] - nums[i - 1] === 0) {
      return false;
    }

    // 下一个数和当前数差多少就需要多少个0
    countZero -= nums[i] - nums[i - 1] - 1;

    // 当零消耗完了 就代表不成立了
    if (countZero < 0) {
      return false;
    }
  }
  return true;
};

console.log(isStraight([4, 7, 5, 9, 2]));
