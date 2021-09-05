/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 * 其实就是算当前数字后面第一个比他大的数的索引和当前索引的差值
 */
const dailyTemperatures = function (temperatures) {
  const result = [];

  for (let i = 0; i < temperatures.length; i++) {
    const num = temperatures[i];

    let bigIndex = i;
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > num) {
        bigIndex = j;
        break;
      }
    }

    result.push(bigIndex - i);
  }
  return result;
};
// @lc code=end
