/**
 * 子集
 * @param {number[]} nums
 * @return {number[][]}
 */

const subsets = function (nums) {
  const len = nums.length;
  const arr = [];
  const res = [];
  dfs(0, arr);
  return res;

  function dfs(num, vec) {
    const tmp = vec.slice(0);
    res.push(tmp);
    for (let i = num; i < len; i++) {
      vec.push(nums[i]);
      dfs(i + 1, vec);
      vec.splice(-1);
    }
  }
};
const result = subsets([4, 4, 4, 1, 4]);

console.log(result);
