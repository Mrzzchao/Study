/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    for(var i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === i && s.indexOf(s[i], i + 1) === -1) {
            return i
        }
    }
    return -1
};

var result = firstUniqChar("loveleetcode");

console.log(result);
