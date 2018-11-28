/**
 * 最长回文子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var len = s.length
    var longPalindromeStr = ''
    for(var i = 0; i < len; i++) {
        for(var j = len; j >= 0; j--) {
            var subS = s.slice(i, j)
            if((j - i) < longPalindromeStr.length) break;
            if(isPalindrome(subS)) {
                if(subS.length > longPalindromeStr.length) {
                    longPalindromeStr = subS
                }
                break
            }
        }
    }
    return longPalindromeStr

    function isPalindrome(str) {
        var i = 0
        var j = str.length - 1

        while(i < j) {
            if(str[i] === str[j]) {
                i++
                j--
            } else {
                return false
            }
        }
        return true
    }
};

var result = longestPalindrome("babad");

console.log(result);
