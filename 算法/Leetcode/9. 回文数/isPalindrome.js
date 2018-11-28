/**
 * 回文数
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    var s = x.toString();
    var i = 0, j = s.length -1;

    while(i < j) {
        if(s[i] === s[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
};