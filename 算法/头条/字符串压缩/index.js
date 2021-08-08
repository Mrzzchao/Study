/**
 * https://leetcode-cn.com/problems/compress-string-lcci/
 * @param {string} S
 * @return {string}
 */
const compressString = function (S) {
  let count = 1;
  let str = '';

  for (let i = 1; i < S.length + 1; i++) {
    if (S[i] === S[i - 1]) {
      count++;
    } else {
      str += S[i - 1] + count;
      count = 1;
    }
  }

  return S.length > str.length ? str : S;
};
