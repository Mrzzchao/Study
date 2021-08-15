/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  let count = 0;
  let sObj = {};

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (sObj[c] || sObj[c] === 0) {
      const oI = sObj[c];
      i = oI + 1;
      count = 1;
      sObj = {};
      sObj[s[i]] = i;
    } else {
      sObj[c] = i;
      count++;
    }

    if (count > maxLen) {
      maxLen = count;
    }
  }

  return maxLen;
};

const result = lengthOfLongestSubstring('abcabcbb');

console.log(result);
