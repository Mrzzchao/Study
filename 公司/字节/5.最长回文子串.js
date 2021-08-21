/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
// /**
//  * @param {string} s
//  * @return {string}
//  */
// const longestPalindrome = function (s) {
//   if (s.length === 1) return s;
//   let max = 1;
//   function palindrome(s) {
//     let i = 0;
//     let j = s.length - 1;
//     while (i < j) {
//       if (s[i] !== s[j]) {
//         return false;
//       }
//       i++;
//       j--;
//     }

//     return true;
//   }

//   let result = s[0];
//   for (let i = 0; i < s.length; i++) {
//     for (let j = s.length; j >= 0; j--) {
//       const subStr = s.slice(i, j);
//       const match = palindrome(subStr);
//       if (match && subStr.length > max) {
//         result = subStr;
//         max = subStr.length;
//         break;
//       }
//     }
//   }

//   return result;
// };
/**
 * dp[i][j]: s[i...j]是否为回文串
 * dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]
 * @param {*} s
 */
const longestPalindrome = function (s) {
  const dp = [];
  let result = s[0];
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = [];
    for (let j = i; j < s.length; j++) {
      if (i === j) {
        dp[i][j] = true;
      } else if (j - i === 1 && s[i] === s[j]) {
        dp[i][j] = true;
      } else if (dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = true;
      }
      if (dp[i][j] && j - i + 1 > result.length) {
        result = s.slice(i, j + 1);
      }
    }
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = longestPalindrome;
// @after-stub-for-debug-end
