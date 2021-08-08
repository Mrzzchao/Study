/**
 * 三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  let target;
  const result = [];
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (target === nums[i]) {
      continue;
    } else {
      target = nums[i];
    }
    let low = i + 1;
    let high = len - 1;
    while (low < high) {
      const a = nums[low];
      const b = nums[high];
      if (-target === a + b) {
        result.push([target, a, b]);
        do {
          low++;
        } while (a === nums[low]);
      } else {
        if (a + b < -target) {
          low++;
        } else {
          high--;
        }
      }
    }
  }

  return result;
};

const result = threeSum([-1, 0, 1, 2, -1, -4]);

console.log(result);
