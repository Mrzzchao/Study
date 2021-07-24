/**
 * 全排列
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  for (var i = 0; i < nums.length; i++) {
    const arr = permute(nums.slice(0, i).concat(nums.slice(i + 1, nums.length)));
    arr.forEach(function (a) {
      result.push([nums[i], ...a]);
    });
    if (arr.length === 0) {
      result.push([nums[i]]);
    }
  }
  return result;
};

const result = permute([1, 2, 3]);

console.log(result);
