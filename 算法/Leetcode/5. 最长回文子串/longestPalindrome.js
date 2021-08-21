/**
 * 最长回文子串
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  const len = s.length;
  let longPalindromeStr = '';
  for (let i = 0; i < len; i++) {
    for (let j = len; j >= 0; j--) {
      const subS = s.slice(i, j);
      if (j - i < longPalindromeStr.length) break;
      if (isPalindrome(subS)) {
        if (subS.length > longPalindromeStr.length) {
          longPalindromeStr = subS;
        }
        break;
      }
    }
  }
  return longPalindromeStr;

  function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
      if (str[i] === str[j]) {
        i++;
        j--;
      } else {
        return false;
      }
    }
    return true;
  }
};

const result = longestPalindrome('babad');

console.log(result);
