/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let sMap = {};
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (Number.isInteger(sMap[s[i]])) {
      i = sMap[s[i]] + 1;
      sMap = {};
      count = 0;
    }
    sMap[s[i]] = i;
    count++;

    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
};

const str = 'abcabcbb';
const result = lengthOfLongestSubstring(str);
console.log(result);
