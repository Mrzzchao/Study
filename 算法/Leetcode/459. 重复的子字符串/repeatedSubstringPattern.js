/**
 * 重复的子字符串
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    var newStr = s + s;
    newStr = newStr.substr(0,newStr.length - 1).substr(1);
    // console.log(newStr);
    if (newStr.indexOf(s) != -1) {
        return true;
    }
    return false;
};

var result = repeatedSubstringPattern("abcdabcd");

console.log(result)