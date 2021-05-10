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
  const version1Arr = version1.split('.');
  const version2Arr = version2.split('.');

  let n = version1Arr.length;
  if (version2Arr.length > version1Arr.length) {
    n = version2Arr.length;
  }

  for (let i = 0; i < n; i++) {
    let version1Item = version1Arr[i];
    let version2Item = version2Arr[i];

    version1Item = (version1Item || '').replace(/^0([1-9]+)/, '$1');
    version2Item = (version2Item || '').replace(/^0([1-9]+)/, '$1');

    if (+version1Item > +version2Item) return 1;
    if (+version1Item < +version2Item) return -1;
  }

  return 0;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = compareVersion;
// @after-stub-for-debug-end
