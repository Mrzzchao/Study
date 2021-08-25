/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
  const v1Arr = version1.split('.');
  const v2Arr = version2.split('.');

  const n = Math.max(v1Arr.length, v2Arr.length);

  for (let i = 0; i < n; i++) {
    const v1 = +(v1Arr[i] || '0').replace(/^(0+)(\d+)/, '$2');
    const v2 = +(v2Arr[i] || '0').replace(/^(0+)(\d+)/, '$2');

    if (v1 > v2) {
      return 1;
    }
    if (v1 < v2) {
      return -1;
    }
  }

  return 0;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = compareVersion;
// @after-stub-for-debug-end
