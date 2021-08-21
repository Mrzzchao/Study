/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  intervals = intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  function getArr(arr1, arr2) {
    if (arr1.length === 0) return [arr2];
    if (arr1[1] >= arr2[0] && arr1[0] <= arr2[1]) {
      return [[Math.min(arr1[0], arr2[0]), Math.max(arr1[1], arr2[1])]];
    }
    return [arr1, arr2];
  }
  const result = [];

  let pre = intervals[0];

  for (let i = 0; i < intervals.length; i++) {
    const curr = intervals[i];

    // 说明有交集
    if (pre[1] >= curr[0]) {
      // 先进行合并，之后确定不需要合并再推入结果中
      pre[1] = Math.max(pre[1], curr[1]);
    } else {
      result.push(pre);
      pre = curr;
    }
  }

  result.push(pre);

  // while (intervals.length) {
  //   const currArr = intervals.shift();
  //   let checkArr = [];
  //   if (result.length) {
  //     checkArr = result.pop();
  //   }

  //   const mergeArr = getArr(checkArr, currArr);

  //   result.push(...mergeArr);
  // }

  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = merge;
// @after-stub-for-debug-end
