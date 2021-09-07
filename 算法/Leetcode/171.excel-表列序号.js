/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 * 其实就是26进制转换
 */
const titleToNumber = function (columnTitle) {
  return columnTitle.split('').reduce((prev, curr) => {
    const newVal = curr.charCodeAt() - 'A'.charCodeAt() + 1;
    return prev * 26 + newVal;
  }, 0);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = titleToNumber;
// @after-stub-for-debug-end
