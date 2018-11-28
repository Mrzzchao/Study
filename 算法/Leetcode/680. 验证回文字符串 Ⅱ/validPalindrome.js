/**
 * 验证回文字符串 Ⅱ
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    var i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] == s[j]) {
            i++;
            j--;
        } else {
            var subS1 = s.slice(i, j);
            var subS2 = s.slice(i + 1, j + 1);
            if (subS1 == subS1.split("").reverse().join("")) {
                return true;
            } else if (subS2 == subS2.split("").reverse().join("")) {
                return true;
            } else {
                return false;
            }
        }
    }
    return true;
}

var result = validPalindrome('abda');

console.log(result);
