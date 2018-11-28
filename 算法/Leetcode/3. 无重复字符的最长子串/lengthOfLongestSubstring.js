/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var maxLen = 0
    var count = 0
    var sObj = {}

    for(var i = 0; i < s.length; i++) {
        var c = s[i]
        if(sObj[c] || sObj[c] === 0) {
            var oI = sObj[c]
            i = oI + 1
            count = 1
            sObj = {}
            sObj[s[i]] = i
        } else {
            sObj[c] = i
            count++
        }

        if(count > maxLen) {
            maxLen = count
        }
    }

    return maxLen
};

var result = lengthOfLongestSubstring("abcabcbb");

console.log(result);
